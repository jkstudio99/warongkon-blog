import http from 'node:http';
import path from 'node:path';
import { createReadStream } from 'node:fs';
import { access, mkdir, readdir, readFile, rename, rm, stat, unlink, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const rootDir = process.cwd();
const blogDir = path.join(rootDir, 'src/content/blog');
const lucideIconsDir = path.join(rootDir, 'node_modules/lucide-static/icons');
const publicDir = path.join(rootDir, 'public/backoffice');
const port = Number(process.env.BACKOFFICE_PORT || 8787);
const maxBodySize = 16 * 1024 * 1024;
const slugPattern = /^[a-z0-9][a-z0-9-]*[a-z0-9]$/;

const contentTypes = {
	'.css': 'text/css; charset=utf-8',
	'.html': 'text/html; charset=utf-8',
	'.js': 'text/javascript; charset=utf-8',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.png': 'image/png',
	'.svg': 'image/svg+xml; charset=utf-8',
	'.webp': 'image/webp'
};

const postRepository = {
	async list() {
		const entries = await readdir(blogDir, { withFileTypes: true });
		const posts = [];

		for (const entry of entries) {
			if (!entry.isDirectory()) continue;

			try {
				posts.push(await this.read(entry.name, { includeBody: false }));
			} catch {
				// Keep a malformed draft from hiding the rest of the library.
			}
		}

		return posts.sort((a, b) => {
			const byDate = dateScore(b.pubDate) - dateScore(a.pubDate);
			return byDate || a.slug.localeCompare(b.slug);
		});
	},

	async stats() {
		const posts = await this.list();
		const tags = new Set(posts.flatMap((post) => post.tags || []));

		return {
			totalPosts: posts.length,
			latestDate: posts[0]?.pubDate || '',
			totalTags: tags.size,
			withCover: posts.filter((post) => post.hasCover).length
		};
	},

	async create(payload) {
		const slug = validateSlug(payload.slug || slugify(payload.title || 'untitled-post'));
		const dir = getPostDir(slug);

		await assertMissing(dir, `Post "${slug}" already exists`);
		await mkdir(dir, { recursive: true });
		await writeFile(path.join(dir, 'index.md'), formatPost({ ...payload, slug, coverImage: getCoverImageValue(payload) }), 'utf8');
		await maybeWriteCover(dir, payload);

		return this.read(slug);
	},

	async read(slug, options = { includeBody: true }) {
		const safeSlug = validateSlug(slug);
		const dir = getPostDir(safeSlug);
		const entry = await findPostEntry(dir);
		const source = await readFile(entry.path, 'utf8');
		const parsed = parseMarkdown(source);
		const coverPath = path.join(dir, 'cover.jpg');
		const hasCover = await fileExists(coverPath);

		return {
			slug: safeSlug,
			fileName: entry.fileName,
			title: parsed.frontmatter.title || '',
			seoTitle: parsed.frontmatter.seoTitle || '',
			description: parsed.frontmatter.description || '',
			pubDate: parsed.frontmatter.pubDate || '',
			updatedDate: parsed.frontmatter.updatedDate || '',
			tags: parsed.frontmatter.tags || [],
			coverImage: parsed.frontmatter.coverImage || '',
			hasCover,
			coverUrl: hasCover ? `/content/${safeSlug}/cover.jpg?v=${(await stat(coverPath)).mtimeMs}` : '',
			body: options.includeBody === false ? undefined : parsed.body
		};
	},

	async update(slug, payload) {
		const currentSlug = validateSlug(slug);
		const nextSlug = validateSlug(payload.slug || currentSlug);
		let currentDir = getPostDir(currentSlug);

		await findPostEntry(currentDir);

		if (currentSlug !== nextSlug) {
			const nextDir = getPostDir(nextSlug);
			await assertMissing(nextDir, `Post "${nextSlug}" already exists`);
			await rename(currentDir, nextDir);
			currentDir = nextDir;
		}

		const entry = await findPostEntry(currentDir);
		await writeFile(
			path.join(currentDir, entry.fileName),
			formatPost({ ...payload, slug: nextSlug, coverImage: getCoverImageValue(payload) }),
			'utf8'
		);
		await maybeWriteCover(currentDir, payload);

		if (payload.removeCover === true) {
			await unlink(path.join(currentDir, 'cover.jpg')).catch(() => {});
		}

		return this.read(nextSlug);
	},

	async remove(slug) {
		const safeSlug = validateSlug(slug);
		const dir = getPostDir(safeSlug);
		await findPostEntry(dir);
		await rm(dir, { recursive: true, force: false });
	}
};

const server = http.createServer(async (req, res) => {
	try {
		const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);

		if (url.pathname === '/') {
			redirect(res, '/backoffice/');
			return;
		}

		if (url.pathname === '/favicon.ico') {
			res.writeHead(204, { 'Cache-Control': 'no-store' });
			res.end();
			return;
		}

		if (url.pathname.startsWith('/api/v1/')) {
			await handleApiV1(req, res, url);
			return;
		}

		if (url.pathname.startsWith('/content/')) {
			await serveContentAsset(res, url);
			return;
		}

		if (url.pathname.startsWith('/backoffice/vendor/lucide/')) {
			await serveLucideIcon(res, url);
			return;
		}

		if (url.pathname.startsWith('/backoffice')) {
			await serveBackOffice(res, url);
			return;
		}

		sendJson(res, 404, { error: { code: 'not_found', message: 'Route not found' } });
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Back office server error';
		sendJson(res, 500, { error: { code: 'server_error', message } });
	}
});

server.listen(port, () => {
	console.log(`Blog back office running at http://localhost:${port}/backoffice/`);
});

async function handleApiV1(req, res, url) {
	const method = req.method || 'GET';
	const route = matchApiRoute(url.pathname);

	if (route.resource === 'posts' && !route.slug && method === 'GET') {
		sendJson(res, 200, { data: await postRepository.list() });
		return;
	}

	if (route.resource === 'posts' && !route.slug && method === 'POST') {
		const payload = await readJson(req);
		sendJson(res, 201, { data: await postRepository.create(payload) });
		return;
	}

	if (route.resource === 'posts' && route.slug && method === 'GET') {
		sendJson(res, 200, { data: await postRepository.read(route.slug) });
		return;
	}

	if (route.resource === 'posts' && route.slug && method === 'PUT') {
		const payload = await readJson(req);
		sendJson(res, 200, { data: await postRepository.update(route.slug, payload) });
		return;
	}

	if (route.resource === 'posts' && route.slug && method === 'DELETE') {
		await postRepository.remove(route.slug);
		sendJson(res, 200, { data: { deleted: true } });
		return;
	}

	if (route.resource === 'stats' && method === 'GET') {
		sendJson(res, 200, { data: await postRepository.stats() });
		return;
	}

	sendJson(res, 404, { error: { code: 'api_not_found', message: 'API route not found' } });
}

function matchApiRoute(pathname) {
	const parts = pathname.split('/').filter(Boolean);
	const resource = parts[2] || '';
	const slug = parts[3] || '';

	if (parts[0] !== 'api' || parts[1] !== 'v1' || parts.length > 4) {
		return { resource: '', slug: '' };
	}

	return { resource, slug };
}

async function serveBackOffice(res, url) {
	const pathname = url.pathname.replace(/\/+$/, '');
	const pageMap = new Map([
		['/backoffice', 'index.html'],
		['/backoffice/create', 'create.html'],
		['/backoffice/edit', 'edit.html']
	]);
	const requested = pageMap.get(pathname) || url.pathname.replace(/^\/backoffice\/?/, '');
	const fileName = requested || 'index.html';

	if (fileName.includes('..')) {
		sendJson(res, 400, { error: { code: 'bad_static_path', message: 'Invalid static path' } });
		return;
	}

	await serveFile(res, path.join(publicDir, fileName));
}

async function serveContentAsset(res, url) {
	const [, , slug, fileName] = url.pathname.split('/');
	validateSlug(slug);

	if (!fileName || fileName.includes('/') || fileName.includes('..')) {
		sendJson(res, 400, { error: { code: 'bad_asset_path', message: 'Invalid file name' } });
		return;
	}

	await serveFile(res, path.join(getPostDir(slug), fileName));
}

async function serveLucideIcon(res, url) {
	const fileName = url.pathname.split('/').pop() || '';

	if (!/^[a-z0-9-]+\.svg$/.test(fileName)) {
		sendJson(res, 400, { error: { code: 'bad_icon_path', message: 'Invalid icon name' } });
		return;
	}

	await serveFile(res, path.join(lucideIconsDir, fileName));
}

async function serveFile(res, filePath) {
	try {
		const safePath = path.resolve(filePath);
		const type = contentTypes[path.extname(safePath).toLowerCase()] || 'application/octet-stream';
		await access(safePath);
		res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-store' });
		createReadStream(safePath).pipe(res);
	} catch {
		sendJson(res, 404, { error: { code: 'file_not_found', message: 'File not found' } });
	}
}

async function readJson(req) {
	const chunks = [];
	let size = 0;

	for await (const chunk of req) {
		size += chunk.length;
		if (size > maxBodySize) {
			throw new Error('Request body is too large');
		}
		chunks.push(chunk);
	}

	if (!chunks.length) return {};
	return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

async function maybeWriteCover(dir, payload) {
	if (!payload.coverDataUrl) return;

	const match = String(payload.coverDataUrl).match(/^data:image\/(?:png|jpe?g|webp|svg\+xml);base64,(.+)$/);
	if (!match) {
		throw new Error('Cover must be a PNG, JPG, WebP, or SVG data URL');
	}

	await sharp(Buffer.from(match[1], 'base64'))
		.resize(960, 480, { fit: 'cover' })
		.jpeg({ quality: 92, mozjpeg: true })
		.toFile(path.join(dir, 'cover.jpg'));
}

async function findPostEntry(dir) {
	for (const fileName of ['index.md', 'index.mdx']) {
		const filePath = path.join(dir, fileName);
		if (await fileExists(filePath)) {
			return { fileName, path: filePath };
		}
	}

	throw new Error('Post file not found');
}

function getCoverImageValue(payload) {
	if (payload.removeCover === true) return '';
	if (payload.coverDataUrl) return './cover.jpg';
	return payload.coverImage || '';
}

function formatPost(post) {
	const cleanTags = normalizeTags(post.tags);
	const lines = [
		'---',
		`title: ${JSON.stringify(String(post.title || '').trim())}`,
		post.seoTitle ? `seoTitle: ${JSON.stringify(String(post.seoTitle).trim())}` : '',
		`description: ${JSON.stringify(String(post.description || '').trim())}`,
		`pubDate: ${JSON.stringify(String(post.pubDate || new Date().toISOString().slice(0, 10)))}`,
		post.updatedDate ? `updatedDate: ${JSON.stringify(String(post.updatedDate).trim())}` : '',
		`tags: ${JSON.stringify(cleanTags)}`,
		post.coverImage ? `coverImage: ${JSON.stringify(String(post.coverImage))}` : '',
		'---',
		'',
		String(post.body || '').trimEnd(),
		''
	].filter((line) => line !== '');

	return lines.join('\n');
}

function parseMarkdown(source) {
	const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!match) return { frontmatter: {}, body: source };

	return {
		frontmatter: parseFrontmatter(match[1]),
		body: match[2]
	};
}

function parseFrontmatter(source) {
	const result = {};

	for (const line of source.split(/\r?\n/)) {
		const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
		if (!match) continue;
		result[match[1]] = parseValue(match[2]);
	}

	return result;
}

function parseValue(value) {
	const trimmed = value.trim();

	if (trimmed.startsWith('[')) {
		try {
			return JSON.parse(trimmed);
		} catch {
			return trimmed;
		}
	}

	if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
		return trimmed.slice(1, -1).replace(/''/g, "'");
	}

	return trimmed;
}

function normalizeTags(tags) {
	const list = Array.isArray(tags) ? tags : String(tags || '').split(',');
	return list.map((tag) => String(tag).trim()).filter(Boolean);
}

function dateScore(value) {
	const timestamp = Date.parse(String(value || ''));
	return Number.isNaN(timestamp) ? 0 : timestamp;
}

function getPostDir(slug) {
	return path.join(blogDir, slug);
}

function validateSlug(slug) {
	const safeSlug = String(slug || '').trim().toLowerCase();
	if (!slugPattern.test(safeSlug) || safeSlug.includes('..')) {
		throw new Error('Invalid slug');
	}

	return safeSlug;
}

function slugify(input) {
	return String(input)
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9\s-]/g, ' ')
		.trim()
		.replace(/[\s-]+/g, '-');
}

async function fileExists(filePath) {
	try {
		await access(filePath);
		return true;
	} catch {
		return false;
	}
}

async function assertMissing(filePath, message) {
	if (await fileExists(filePath)) {
		throw new Error(message);
	}
}

function redirect(res, location) {
	res.writeHead(302, { Location: location });
	res.end();
}

function sendJson(res, status, payload) {
	res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
	res.end(JSON.stringify(payload));
}
