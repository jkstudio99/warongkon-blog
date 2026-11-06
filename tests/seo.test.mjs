import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const SITE_URL = 'https://warongkon-blog.vercel.app';

/**
 * Decode common HTML entities in extracted text/attributes.
 */
function decodeHtmlEntities(str = '') {
	return str
		.replace(/&amp;/g, '&')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&#x27;/gi, "'")
		.replace(/&apos;/g, "'")
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
		.replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

/**
 * Parse attributes from an HTML opening tag into a lowercase-keyed map.
 */
function parseAttributes(tagStr) {
	const attrs = {};
	const inner = tagStr.replace(/^<[a-zA-Z0-9:-]+\s*/, '').replace(/\/?>$/, '');
	const attrRegex = /([a-zA-Z0-9_:-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
	let match;
	while ((match = attrRegex.exec(inner)) !== null) {
		const key = match[1].toLowerCase();
		const rawVal = match[2] ?? match[3] ?? match[4] ?? '';
		attrs[key] = decodeHtmlEntities(rawVal);
	}
	return attrs;
}

/**
 * Find all opening tags `<tagName ...>` in an HTML document.
 */
function findTags(html, tagName) {
	const regex = new RegExp(`<${tagName}\\b(?:"[^"]*"|'[^']*'|[^>"'])*>`, 'gi');
	const results = [];
	let match;
	while ((match = regex.exec(html)) !== null) {
		results.push({
			raw: match[0],
			attrs: parseAttributes(match[0]),
			index: match.index
		});
	}
	return results;
}

function getMetaByName(html, name) {
	const target = name.toLowerCase();
	const found = findTags(html, 'meta').find((t) => t.attrs.name?.toLowerCase() === target);
	return found?.attrs.content;
}

function getAllMetaByName(html, name) {
	const target = name.toLowerCase();
	return findTags(html, 'meta')
		.filter((t) => t.attrs.name?.toLowerCase() === target)
		.map((t) => t.attrs.content ?? '');
}

function getMetaByProperty(html, prop) {
	const target = prop.toLowerCase();
	const found = findTags(html, 'meta').find((t) => t.attrs.property?.toLowerCase() === target);
	return found?.attrs.content;
}

function getAllMetaByProperty(html, prop) {
	const target = prop.toLowerCase();
	return findTags(html, 'meta')
		.filter((t) => t.attrs.property?.toLowerCase() === target)
		.map((t) => t.attrs.content ?? '');
}

function getLinksByRel(html, relValue) {
	const target = relValue.toLowerCase();
	return findTags(html, 'link').filter((t) => {
		const rel = (t.attrs.rel || '').toLowerCase();
		return rel === target || rel.split(/\s+/).includes(target);
	});
}

function getTitle(html) {
	const match = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
	return match ? decodeHtmlEntities(match[1].trim()) : '';
}

function getH1s(html) {
	const regex = /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi;
	const results = [];
	let match;
	while ((match = regex.exec(html)) !== null) {
		const innerHtml = match[1];
		const text = decodeHtmlEntities(innerHtml.replace(/<[^>]+>/g, '').trim());
		results.push({ raw: match[0], innerHtml, text });
	}
	return results;
}

/**
 * Extract and parse all `<script type="application/ld+json">` blocks in an HTML string.
 * Flattens top-level arrays, `@graph` arrays, and nested schema objects.
 */
function extractJsonLd(html, label = '') {
	const scriptRegex = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
	const scripts = [];
	const nodes = [];

	function collectNodes(item) {
		if (!item || typeof item !== 'object') return;
		if (Array.isArray(item)) {
			for (const sub of item) collectNodes(sub);
			return;
		}
		if (item['@type']) {
			nodes.push(item);
		}
		if (Array.isArray(item['@graph'])) {
			for (const g of item['@graph']) collectNodes(g);
		}
		for (const [k, v] of Object.entries(item)) {
			if (k !== '@graph' && v && typeof v === 'object') {
				collectNodes(v);
			}
		}
	}

	let match;
	while ((match = scriptRegex.exec(html)) !== null) {
		const rawJson = match[1].trim();
		assert.ok(rawJson.length > 0, `Empty JSON-LD script block on ${label}`);
		let parsed;
		try {
			parsed = JSON.parse(rawJson);
		} catch (err) {
			assert.fail(`Invalid JSON-LD on ${label}: ${err.message}\n${rawJson.slice(0, 300)}`);
		}
		scripts.push(parsed);
		collectNodes(parsed);
	}

	function nodeHasType(node, targetType) {
		const t = node?.['@type'];
		if (typeof t === 'string') return t === targetType;
		if (Array.isArray(t)) return t.includes(targetType);
		return false;
	}

	return {
		scripts,
		nodes,
		hasType(targetType) {
			return nodes.some((n) => nodeHasType(n, targetType));
		},
		getNodesByType(targetType) {
			return nodes.filter((n) => nodeHasType(n, targetType));
		}
	};
}

function readDistFile(relPath) {
	const fullPath = path.join(DIST_DIR, relPath);
	assert.ok(fs.existsSync(fullPath), `Expected dist file to exist: ${relPath}`);
	return fs.readFileSync(fullPath, 'utf-8');
}

const REQUIRED_SAMPLE_POST_SLUGS = [
	// Post with .svg cover
	'2026-05-01-global-ai-openai-aws-bedrock',
	// Posts that previously lacked covers / had H3-only headings
	'2026-04-28-global-ai-world-models',
	'2026-04-24-tech-update-daily-global-thailand-2026',
	'2026-04-28-games-consumer-spatial-tech',
	'2026-04-28-hardware-infra-liquid-cooling',
	'2026-04-28-thailand-sea-tech-ecosystem',
	'2026-04-29-tech-update-daily-ux-writing-2026',
	// Post with large PNG cover
	'2026-05-08-games-consumer-star-fox-direct-switch-2'
];

const RESERVED_DIST_DIRS = new Set([
	'about',
	'posts',
	'projects',
	'tags',
	'_astro',
	'pagefind',
	'fonts',
	'backoffice'
]);

/**
 * Build a deterministic sample of >= 25 blog post HTML files from `dist/`,
 * always including all required special-case slugs from DISPATCH.md.
 */
function getSampleBlogPostFiles() {
	assert.ok(fs.existsSync(DIST_DIR), `dist directory does not exist at ${DIST_DIR}`);

	const selectedSlugs = new Set();
	for (const slug of REQUIRED_SAMPLE_POST_SLUGS) {
		selectedSlugs.add(slug);
	}

	const entries = fs.readdirSync(DIST_DIR, { withFileTypes: true });
	const allPostDirs = entries
		.filter(
			(e) =>
				e.isDirectory() &&
				!RESERVED_DIST_DIRS.has(e.name) &&
				fs.existsSync(path.join(DIST_DIR, e.name, 'index.html'))
		)
		.map((e) => e.name)
		.sort();

	// Pick evenly spaced posts across the sorted list so we have at least 25 blog posts
	const targetCount = 26;
	const step = Math.max(1, Math.floor(allPostDirs.length / 20));
	for (let i = 0; i < allPostDirs.length && selectedSlugs.size < targetCount; i += step) {
		selectedSlugs.add(allPostDirs[i]);
	}
	for (const slug of allPostDirs) {
		if (selectedSlugs.size >= targetCount) break;
		selectedSlugs.add(slug);
	}

	return [...selectedSlugs].map((slug) => ({
		slug,
		relPath: `${slug}/index.html`,
		fullPath: path.join(DIST_DIR, slug, 'index.html')
	}));
}

// ============================================================================
// 1. Technical SEO Endpoints & Infrastructure (F1–F7)
// ============================================================================
describe('1. Technical SEO Endpoints & Infrastructure (F1–F7)', () => {
	test('F1: dist/robots.txt exists with search & AI crawler rules, Disallow /backoffice/, and Sitemap URL', () => {
		const robotsTxt = readDistFile('robots.txt');
		assert.ok(robotsTxt.trim().length > 0, 'robots.txt must be non-empty');

		assert.match(robotsTxt, /User-agent:\s*\*/i, 'robots.txt must include User-agent: *');
		assert.match(robotsTxt, /User-agent:\s*Googlebot/i, 'robots.txt must include Googlebot');
		assert.match(robotsTxt, /User-agent:\s*GPTBot/i, 'robots.txt must include GPTBot');
		assert.match(robotsTxt, /User-agent:\s*ClaudeBot/i, 'robots.txt must include ClaudeBot');
		assert.match(robotsTxt, /User-agent:\s*PerplexityBot/i, 'robots.txt must include PerplexityBot');
		assert.match(robotsTxt, /Allow:\s*\/\s*$/im, 'robots.txt must include Allow: /');
		assert.match(robotsTxt, /Disallow:\s*\/backoffice\//i, 'robots.txt must disallow /backoffice/');
		assert.match(
			robotsTxt,
			/Sitemap:\s*https:\/\/warongkon-blog\.vercel\.app\/sitemap-index\.xml/i,
			'robots.txt must declare Sitemap: https://warongkon-blog.vercel.app/sitemap-index.xml'
		);
	});

	test('F2: dist/sitemap-index.xml, dist/sitemap-0.xml, and dist/sitemap.xml exist, are valid XML with <lastmod>, and exclude thin/non-canonical routes', () => {
		const sitemapIndex = readDistFile('sitemap-index.xml');
		const sitemap0 = readDistFile('sitemap-0.xml');
		const sitemapXml = readDistFile('sitemap.xml');

		for (const [name, content] of [
			['sitemap-index.xml', sitemapIndex],
			['sitemap-0.xml', sitemap0],
			['sitemap.xml', sitemapXml]
		]) {
			assert.ok(content.trim().length > 0, `${name} must not be empty`);
			assert.ok(
				content.includes('<?xml') || content.includes('<urlset') || content.includes('<sitemapindex'),
				`${name} must start with valid XML root declaration`
			);
			const hasValidRoot =
				(content.includes('<sitemapindex') && content.includes('</sitemapindex>')) ||
				(content.includes('<urlset') && content.includes('</urlset>'));
			assert.ok(hasValidRoot, `${name} must have balanced <sitemapindex> or <urlset> root element`);

			assert.ok(!content.includes('/404'), `${name} must not contain /404`);
			assert.ok(!content.includes('/backoffice'), `${name} must not contain /backoffice`);
			assert.ok(!content.includes('/first-post'), `${name} must not contain /first-post`);
			assert.ok(!content.includes('/second-post'), `${name} must not contain /second-post`);
			assert.ok(!content.includes('/third-post'), `${name} must not contain /third-post`);
			assert.ok(!/\/posts\/\d+\/?/.test(content), `${name} must not contain deep pagination /posts/[page]/`);
		}

		// sitemap-index.xml must reference sitemap-0.xml
		assert.match(
			sitemapIndex,
			/<loc>https:\/\/warongkon-blog\.vercel\.app\/sitemap-0\.xml<\/loc>/,
			'sitemap-index.xml must point to https://warongkon-blog.vercel.app/sitemap-0.xml'
		);

		// Check <url> entries and <lastmod> tags in sitemap-0.xml and sitemap.xml
		for (const [name, content] of [
			['sitemap-0.xml', sitemap0],
			['sitemap.xml', sitemapXml]
		]) {
			if (content.includes('<urlset')) {
				const urlMatches = [...content.matchAll(/<url>([\s\S]*?)<\/url>/g)];
				assert.ok(
					urlMatches.length >= 500,
					`${name} should contain at least 500 canonical <url> entries (found ${urlMatches.length})`
				);

				const lastmodMatches = [...content.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)];
				assert.ok(lastmodMatches.length > 0, `${name} must include <lastmod> tags on URLs`);
				for (const lm of lastmodMatches.slice(0, 20)) {
					assert.ok(
						!Number.isNaN(Date.parse(lm[1])),
						`Invalid <lastmod> ISO date in ${name}: ${lm[1]}`
					);
				}

				const locs = [...content.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
				for (const loc of locs) {
					assert.ok(
						loc.startsWith(`${SITE_URL}/`),
						`${name} <loc> must start with ${SITE_URL}/ (got ${loc})`
					);
					assert.ok(
						loc.endsWith('/'),
						`${name} <loc> must end with trailing slash / (got ${loc})`
					);
				}
			}
		}

		const locs0 = [...sitemap0.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).sort();
		const locsXml = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).sort();
		assert.deepEqual(
			locs0,
			locsXml,
			`sitemap-0.xml (${locs0.length} URLs) and sitemap.xml (${locsXml.length} URLs) must have identical <loc> sets`
		);
	});

	test('F3: dist/rss.xml exists, has <language>th</language>, sorts <item> elements descending by <pubDate>, and excludes demo posts', () => {
		const rssXml = readDistFile('rss.xml');
		assert.ok(rssXml.includes('<rss') && rssXml.includes('</rss>'), 'rss.xml must be valid RSS XML');
		assert.match(rssXml, /<language>\s*th\s*<\/language>/i, 'rss.xml must contain <language>th</language>');

		assert.ok(!rssXml.includes('first-post'), 'rss.xml must not contain deleted first-post');
		assert.ok(!rssXml.includes('second-post'), 'rss.xml must not contain deleted second-post');
		assert.ok(!rssXml.includes('third-post'), 'rss.xml must not contain deleted third-post');
		assert.ok(!rssXml.includes('Lorem ipsum dolor sit amet'), 'rss.xml must not contain Lorem ipsum demo text');

		const itemBlocks = [...rssXml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
		assert.ok(itemBlocks.length >= 500, `rss.xml must contain blog items (found ${itemBlocks.length})`);

		const pubDates = itemBlocks.map((item, idx) => {
			const match = item.match(/<pubDate>([^<]+)<\/pubDate>/);
			assert.ok(match, `RSS item #${idx} is missing <pubDate>`);
			const time = Date.parse(match[1]);
			assert.ok(!Number.isNaN(time), `RSS item #${idx} has unparseable <pubDate>: ${match[1]}`);
			return time;
		});

		for (let i = 0; i < pubDates.length - 1; i++) {
			assert.ok(
				pubDates[i] >= pubDates[i + 1],
				`RSS items are not sorted in descending chronological order at index ${i}: ${new Date(pubDates[i]).toISOString()} < ${new Date(pubDates[i + 1]).toISOString()}`
			);
		}
	});

	test('F4: dist/llms.txt and dist/llms-full.txt exist, are non-empty Markdown files with Warongkon and canonical URLs', () => {
		const llmsTxt = readDistFile('llms.txt');
		const llmsFullTxt = readDistFile('llms-full.txt');

		assert.ok(llmsTxt.trim().length > 200, 'llms.txt must be a non-empty Markdown document');
		assert.ok(llmsFullTxt.trim().length > llmsTxt.length, 'llms-full.txt must be larger than llms.txt');

		for (const [name, content] of [
			['llms.txt', llmsTxt],
			['llms-full.txt', llmsFullTxt]
		]) {
			assert.match(content, /^#\s+/m, `${name} must contain Markdown headings`);
			assert.ok(content.includes('Warongkon'), `${name} must mention Warongkon`);
			assert.ok(
				content.includes(`${SITE_URL}/`),
				`${name} must contain canonical ${SITE_URL}/ URLs`
			);
			assert.ok(!content.includes('first-post'), `${name} must not reference deleted first-post`);
		}
	});

	test('F6: dist/backoffice directory does NOT exist in production build output', () => {
		const backofficePath = path.join(DIST_DIR, 'backoffice');
		assert.equal(
			fs.existsSync(backofficePath),
			false,
			'dist/backoffice must NOT exist in production build output'
		);
	});

	test('F7: dist/site.webmanifest and root vercel.json exist and contain required fields and security headers', () => {
		const manifestRaw = readDistFile('site.webmanifest');
		let manifest;
		try {
			manifest = JSON.parse(manifestRaw);
		} catch (err) {
			assert.fail(`dist/site.webmanifest is not valid JSON: ${err.message}`);
		}
		assert.ok(manifest.name && typeof manifest.name === 'string', 'site.webmanifest must have name');
		assert.ok(manifest.short_name && typeof manifest.short_name === 'string', 'site.webmanifest must have short_name');
		assert.ok(Array.isArray(manifest.icons) && manifest.icons.length > 0, 'site.webmanifest must have non-empty icons array');
		assert.ok(manifest.start_url && typeof manifest.start_url === 'string', 'site.webmanifest must have start_url');
		assert.ok(manifest.theme_color && typeof manifest.theme_color === 'string', 'site.webmanifest must have theme_color');

		const vercelPath = path.join(ROOT_DIR, 'vercel.json');
		assert.ok(fs.existsSync(vercelPath), 'vercel.json must exist at project root');
		let vercelConfig;
		try {
			vercelConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf-8'));
		} catch (err) {
			assert.fail(`vercel.json is not valid JSON: ${err.message}`);
		}
		assert.ok(Array.isArray(vercelConfig.headers) && vercelConfig.headers.length > 0, 'vercel.json must define headers');

		const allHeaderKeys = new Set(
			vercelConfig.headers.flatMap((h) => (h.headers || []).map((kv) => kv.key?.toLowerCase()))
		);
		assert.ok(allHeaderKeys.has('x-content-type-options'), 'vercel.json must set X-Content-Type-Options');
		assert.ok(allHeaderKeys.has('x-frame-options'), 'vercel.json must set X-Frame-Options');
		assert.ok(allHeaderKeys.has('referrer-policy'), 'vercel.json must set Referrer-Policy');
	});
});

// ============================================================================
// 2. Social Assets, Metadata, OpenGraph, Twitter Cards & JSON-LD (F8–F11)
// ============================================================================
describe('2. Social Assets, Metadata, OpenGraph, Twitter Cards & JSON-LD Structured Data (F8–F11)', () => {
	test('F9: dist/og-default.png exists with valid PNG magic bytes and size > 1000 bytes', () => {
		const ogDefaultPath = path.join(DIST_DIR, 'og-default.png');
		assert.ok(fs.existsSync(ogDefaultPath), 'dist/og-default.png must exist');

		const buf = fs.readFileSync(ogDefaultPath);
		assert.ok(buf.length > 1000, `dist/og-default.png size must be > 1000 bytes (got ${buf.length})`);

		const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
		assert.deepEqual(
			buf.subarray(0, 8),
			pngSignature,
			'dist/og-default.png must start with valid PNG magic bytes (\\x89PNG\\r\\n\\x1a\\n)'
		);
	});

	test('F8–F11: Core indexable pages and >= 20 sampled blog posts have complete metadata, raster OG/Twitter images, and valid JSON-LD', () => {
		const coreIndexablePages = [
			'index.html',
			'about/index.html',
			'posts/index.html',
			'projects/index.html',
			'tags/index.html'
		];
		const samplePosts = getSampleBlogPostFiles();
		assert.ok(
			samplePosts.length >= 20,
			`Expected at least 20 sampled blog posts, found ${samplePosts.length}`
		);

		const allIndexableRelPaths = [
			...coreIndexablePages,
			...samplePosts.map((p) => p.relPath)
		];

		for (const relPath of allIndexableRelPaths) {
			const html = readDistFile(relPath);

			// Zero occurrences of /syakir.webp anywhere
			assert.ok(
				!html.includes('syakir.webp'),
				`${relPath} must NOT contain broken template image /syakir.webp`
			);

			// <html lang="th">
			const htmlTags = findTags(html, 'html');
			assert.ok(htmlTags.length > 0, `${relPath} must have <html> tag`);
			assert.equal(htmlTags[0].attrs.lang, 'th', `${relPath} must have <html lang="th">`);

			// Canonical link ending with /
			const canonicalLinks = getLinksByRel(html, 'canonical');
			assert.ok(canonicalLinks.length === 1, `${relPath} must have exactly 1 <link rel="canonical">`);
			const canonicalHref = canonicalLinks[0].attrs.href || '';
			assert.ok(
				canonicalHref.startsWith(`${SITE_URL}/`) && canonicalHref.endsWith('/'),
				`${relPath} canonical URL must start with ${SITE_URL}/ and end with / (got "${canonicalHref}")`
			);

			// Title & Description (description !== title and length >= 40)
			const title = getTitle(html);
			assert.ok(title.length >= 10, `${relPath} must have a meaningful <title> (got "${title}")`);
			const description = getMetaByName(html, 'description') || '';
			assert.ok(
				description.trim().length >= 40,
				`${relPath} <meta name="description"> must be >= 40 chars (got ${description.trim().length}: "${description}")`
			);
			assert.notEqual(
				description.trim(),
				title.trim(),
				`${relPath} <meta name="description"> must be distinct from <title>`
			);

			// Robots, Author, Theme-Color
			const robots = getMetaByName(html, 'robots') || '';
			assert.ok(
				robots.includes('index, follow') && robots.includes('max-image-preview:large'),
				`${relPath} <meta name="robots"> must contain "index, follow" and "max-image-preview:large" (got "${robots}")`
			);
			const author = getMetaByName(html, 'author') || '';
			assert.ok(author.trim().length > 0, `${relPath} must have non-empty <meta name="author">`);
			const themeColors = getAllMetaByName(html, 'theme-color');
			assert.ok(
				themeColors.length >= 2 && themeColors.every((c) => c.trim().length > 0),
				`${relPath} must have light and dark <meta name="theme-color"> tags`
			);

			// Discovery links: sitemap, rss, manifest
			const sitemapLinks = getLinksByRel(html, 'sitemap');
			assert.ok(sitemapLinks.length >= 1 && sitemapLinks[0].attrs.href, `${relPath} must have <link rel="sitemap">`);

			const rssLinks = getLinksByRel(html, 'alternate').filter(
				(l) => l.attrs.type?.toLowerCase() === 'application/rss+xml'
			);
			assert.ok(
				rssLinks.length >= 1 && rssLinks[0].attrs.href,
				`${relPath} must have <link rel="alternate" type="application/rss+xml">`
			);

			const manifestLinks = getLinksByRel(html, 'manifest');
			assert.ok(
				manifestLinks.length >= 1 && manifestLinks[0].attrs.href,
				`${relPath} must have <link rel="manifest">`
			);

			// OpenGraph required tags
			const ogType = getMetaByProperty(html, 'og:type') || '';
			const ogSiteName = getMetaByProperty(html, 'og:site_name') || '';
			const ogLocale = getMetaByProperty(html, 'og:locale') || '';
			const ogUrl = getMetaByProperty(html, 'og:url') || '';
			const ogTitle = getMetaByProperty(html, 'og:title') || '';
			const ogDescription = getMetaByProperty(html, 'og:description') || '';
			const ogImage = getMetaByProperty(html, 'og:image') || '';
			const ogImageAlt = getMetaByProperty(html, 'og:image:alt') || '';

			assert.ok(ogType.length > 0, `${relPath} missing og:type`);
			assert.ok(ogSiteName.length > 0, `${relPath} missing og:site_name`);
			assert.equal(ogLocale, 'th_TH', `${relPath} og:locale must be "th_TH" (got "${ogLocale}")`);
			assert.ok(ogUrl.startsWith(`${SITE_URL}/`), `${relPath} invalid og:url ("${ogUrl}")`);
			assert.ok(ogTitle.length > 0, `${relPath} missing og:title`);
			assert.ok(ogDescription.length > 0, `${relPath} missing og:description`);
			assert.ok(ogImage.startsWith(`${SITE_URL}/`), `${relPath} og:image must be an absolute URL ("${ogImage}")`);
			assert.ok(
				!/\.svg(\?.*)?$/i.test(ogImage),
				`${relPath} og:image must NOT point to a .svg file ("${ogImage}")`
			);
			assert.match(
				ogImage,
				/\.(png|jpe?g|webp)(\?.*)?$/i,
				`${relPath} og:image must be a raster image (.png, .jpg, .jpeg, or .webp), got "${ogImage}"`
			);
			assert.ok(ogImageAlt.trim().length > 0, `${relPath} missing og:image:alt`);

			// Twitter Card required tags (using name="twitter:*")
			const twitterCard = getMetaByName(html, 'twitter:card') || '';
			const twitterTitle = getMetaByName(html, 'twitter:title') || '';
			const twitterDescription = getMetaByName(html, 'twitter:description') || '';
			const twitterImage = getMetaByName(html, 'twitter:image') || '';
			const twitterImageAlt = getMetaByName(html, 'twitter:image:alt') || '';

			assert.ok(twitterCard.length > 0, `${relPath} missing <meta name="twitter:card">`);
			assert.ok(twitterTitle.length > 0, `${relPath} missing <meta name="twitter:title">`);
			assert.ok(twitterDescription.length > 0, `${relPath} missing <meta name="twitter:description">`);
			assert.ok(
				twitterImage.startsWith(`${SITE_URL}/`),
				`${relPath} twitter:image must be an absolute URL ("${twitterImage}")`
			);
			assert.ok(
				!/\.svg(\?.*)?$/i.test(twitterImage),
				`${relPath} twitter:image must NOT point to a .svg file ("${twitterImage}")`
			);
			assert.match(
				twitterImage,
				/\.(png|jpe?g|webp)(\?.*)?$/i,
				`${relPath} twitter:image must be a raster image (.png, .jpg, .jpeg, or .webp), got "${twitterImage}"`
			);
			assert.ok(twitterImageAlt.trim().length > 0, `${relPath} missing <meta name="twitter:image:alt">`);

			// JSON-LD Structured Data
			const jsonLd = extractJsonLd(html, relPath);
			assert.ok(jsonLd.scripts.length >= 1, `${relPath} must have at least one <script type="application/ld+json">`);
			const rawJsonText = JSON.stringify(jsonLd.scripts);
			assert.ok(
				rawJsonText.includes('https://schema.org'),
				`${relPath} JSON-LD must include "@context": "https://schema.org"`
			);
			assert.ok(jsonLd.hasType('WebSite'), `${relPath} JSON-LD must include WebSite schema`);
			assert.ok(jsonLd.hasType('Person'), `${relPath} JSON-LD must include Person schema`);
			assert.ok(
				rawJsonText.includes('Warongkon Fukthongyoo'),
				`${relPath} JSON-LD Person entity must include "Warongkon Fukthongyoo"`
			);
		}
	});

	test('F10 & F11: Sampled blog post pages have og:type="article", article:* meta tags, and BlogPosting/TechArticle + BreadcrumbList JSON-LD', () => {
		const samplePosts = getSampleBlogPostFiles();
		for (const post of samplePosts) {
			const html = readDistFile(post.relPath);

			assert.equal(
				getMetaByProperty(html, 'og:type'),
				'article',
				`${post.relPath} must have og:type="article"`
			);

			const pubTime = getMetaByProperty(html, 'article:published_time') || '';
			const modTime = getMetaByProperty(html, 'article:modified_time') || '';
			const articleAuthor = getMetaByProperty(html, 'article:author') || '';
			const articleTags = getAllMetaByProperty(html, 'article:tag');

			assert.ok(!Number.isNaN(Date.parse(pubTime)), `${post.relPath} must have valid ISO article:published_time (got "${pubTime}")`);
			assert.ok(!Number.isNaN(Date.parse(modTime)), `${post.relPath} must have valid ISO article:modified_time (got "${modTime}")`);
			assert.ok(articleAuthor.trim().length > 0, `${post.relPath} must have article:author`);
			assert.ok(articleTags.length >= 1, `${post.relPath} must have at least one article:tag`);

			const jsonLd = extractJsonLd(html, post.relPath);
			const articleNodes = [
				...jsonLd.getNodesByType('BlogPosting'),
				...jsonLd.getNodesByType('TechArticle')
			];
			assert.ok(
				articleNodes.length >= 1,
				`${post.relPath} JSON-LD must include BlogPosting or TechArticle`
			);

			const articleNode = articleNodes[0];
			assert.ok(articleNode.headline, `${post.relPath} BlogPosting/TechArticle must have headline`);
			assert.ok(articleNode.datePublished, `${post.relPath} BlogPosting/TechArticle must have datePublished`);
			assert.ok(articleNode.dateModified, `${post.relPath} BlogPosting/TechArticle must have dateModified`);
			assert.ok(articleNode.author, `${post.relPath} BlogPosting/TechArticle must have author`);
			assert.ok(
				Number(articleNode.wordCount) > 0,
				`${post.relPath} BlogPosting/TechArticle must have positive numeric wordCount (got ${articleNode.wordCount})`
			);

			assert.ok(
				jsonLd.hasType('BreadcrumbList'),
				`${post.relPath} JSON-LD must include BreadcrumbList`
			);
		}
	});

	test('F11: dist/about/index.html has ProfilePage and Person JSON-LD with GitHub and LinkedIn sameAs URLs', () => {
		const aboutHtml = readDistFile('about/index.html');
		const jsonLd = extractJsonLd(aboutHtml, 'about/index.html');

		assert.ok(jsonLd.hasType('ProfilePage'), 'about/index.html JSON-LD must include ProfilePage');
		const personNodes = jsonLd.getNodesByType('Person');
		assert.ok(personNodes.length >= 1, 'about/index.html JSON-LD must include Person');

		const allSameAs = personNodes.flatMap((p) => (Array.isArray(p.sameAs) ? p.sameAs : []));
		assert.ok(
			allSameAs.includes('https://github.com/jkstudio99'),
			`about/index.html Person.sameAs must include https://github.com/jkstudio99 (got ${JSON.stringify(allSameAs)})`
		);
		assert.ok(
			allSameAs.some((u) => u.startsWith('https://www.linkedin.com/in/warongkondialogue')),
			`about/index.html Person.sameAs must include https://www.linkedin.com/in/warongkondialogue (got ${JSON.stringify(allSameAs)})`
		);
	});

	test('F10: dist/404.html has <meta name="robots"> containing noindex, raster social image, valid JSON-LD, and zero /syakir.webp references', () => {
		const html404 = readDistFile('404.html');
		assert.ok(!html404.includes('syakir.webp'), '404.html must not reference /syakir.webp');
		const robots = getMetaByName(html404, 'robots') || '';
		assert.ok(
			robots.toLowerCase().includes('noindex'),
			`404.html <meta name="robots"> must contain "noindex" (got "${robots}")`
		);

		const ogImage = getMetaByProperty(html404, 'og:image') || '';
		const twitterImage = getMetaByName(html404, 'twitter:image') || '';
		assert.match(ogImage, /\.(png|jpe?g|webp)(\?.*)?$/i, `404.html og:image must be raster ("${ogImage}")`);
		assert.match(twitterImage, /\.(png|jpe?g|webp)(\?.*)?$/i, `404.html twitter:image must be raster ("${twitterImage}")`);

		const jsonLd = extractJsonLd(html404, '404.html');
		assert.ok(jsonLd.scripts.length >= 1, '404.html must have JSON-LD');
		assert.ok(jsonLd.hasType('WebSite'), '404.html JSON-LD must include WebSite');
		assert.ok(jsonLd.hasType('Person'), '404.html JSON-LD must include Person');
	});
});

// ============================================================================
// 3. Content Hygiene, Semantic HTML5, Internal Linking, Tag Taxonomy & CWV (F12–F17)
// ============================================================================
describe('3. Content Hygiene, Semantic HTML5, Internal Linking, Tag Taxonomy & CWV (F12–F17)', () => {
	test('F12: Demo posts (first-post, second-post, third-post) and template creator projects (syakirurahman, devaradise/paradise-ui) are removed', () => {
		for (const forbiddenDir of [
			'first-post',
			'second-post',
			'third-post',
			'2022-07-08-first-post',
			'2022-07-15-second-post',
			'2022-07-2-third-post'
		]) {
			assert.equal(
				fs.existsSync(path.join(DIST_DIR, forbiddenDir)),
				false,
				`Demo post directory dist/${forbiddenDir} must NOT exist`
			);
		}

		for (const page of ['index.html', 'projects/index.html']) {
			const html = readDistFile(page).toLowerCase();
			assert.ok(
				!html.includes('syakirurahman'),
				`${page} must NOT contain template creator "syakirurahman"`
			);
			assert.ok(
				!html.includes('devaradise/paradise-ui'),
				`${page} must NOT contain template repo "devaradise/paradise-ui"`
			);
		}
	});

	test('F13: Core pages and blog post pages have skip-to-content link, single <main id="main-content">, <nav aria-label="Main navigation">, single <h1>, and no empty <h2>', () => {
		const corePages = [
			'index.html',
			'about/index.html',
			'posts/index.html',
			'projects/index.html',
			'tags/index.html'
		];
		const samplePosts = getSampleBlogPostFiles();
		const allPages = [...corePages, ...samplePosts.map((p) => p.relPath)];

		for (const relPath of allPages) {
			const html = readDistFile(relPath);

			// Skip-to-content link
			const skipLinks = findTags(html, 'a').filter((a) => a.attrs.href === '#main-content');
			assert.ok(
				skipLinks.length >= 1,
				`${relPath} must have a skip-to-content link (href="#main-content")`
			);

			// Single <main id="main-content">
			const mainOpenTags = findTags(html, 'main');
			const mainCloseMatches = [...html.matchAll(/<\/main\s*>/gi)];
			assert.equal(
				mainOpenTags.length,
				1,
				`${relPath} must have exactly 1 opening <main> element (found ${mainOpenTags.length})`
			);
			assert.equal(
				mainCloseMatches.length,
				1,
				`${relPath} must have exactly 1 closing </main> element (found ${mainCloseMatches.length})`
			);
			assert.equal(
				mainOpenTags[0].attrs.id,
				'main-content',
				`${relPath} <main> must have id="main-content"`
			);

			// <nav aria-label="Main navigation">
			const navTags = findTags(html, 'nav');
			const hasMainNav = navTags.some(
				(n) => (n.attrs['aria-label'] || '').toLowerCase() === 'main navigation'
			);
			assert.ok(
				hasMainNav,
				`${relPath} must have <nav aria-label="Main navigation">`
			);

			// Exactly 1 <h1> element
			const h1s = getH1s(html);
			assert.equal(
				h1s.length,
				1,
				`${relPath} must have exactly 1 <h1> element (found ${h1s.length})`
			);
			assert.ok(h1s[0].text.length > 0, `${relPath} <h1> must not be empty`);

			// No empty <h2><a href="/"></a></h2>
			const h2Matches = [...html.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)];
			for (const h2 of h2Matches) {
				const h2Text = h2[1].replace(/<[^>]+>/g, '').replace(/<!--[\s\S]*?-->/g, '').trim();
				assert.ok(
					h2Text.length > 0,
					`${relPath} contains an empty <h2> element: ${h2[0]}`
				);
			}

			// Strict sequential heading hierarchy (no skipping e.g. <h1> -> <h3> without <h2>)
			const headingLevels = [...html.matchAll(/<h([1-6])\b[^>]*>/gi)].map((m) => Number(m[1]));
			for (let i = 1; i < headingLevels.length; i++) {
				assert.ok(
					headingLevels[i] <= headingLevels[i - 1] + 1,
					`${relPath} skips heading level from <h${headingLevels[i - 1]}> to <h${headingLevels[i]}> (sequence: ${headingLevels.map((l) => `h${l}`).join(' -> ')})`
				);
			}
		}
	});

	test('F14 & F5: Blog post pages have visible Breadcrumb nav, author link to /about/, reading time (นาที), related posts links, and trailing slashes on all tag links', () => {
		const samplePosts = getSampleBlogPostFiles();
		for (const post of samplePosts) {
			const html = readDistFile(post.relPath);

			// Visible breadcrumb navigation (aria-label="Breadcrumb")
			const hasBreadcrumbNav = findTags(html, 'nav').some(
				(n) => (n.attrs['aria-label'] || '').toLowerCase() === 'breadcrumb'
			);
			assert.ok(
				hasBreadcrumbNav,
				`${post.relPath} must have visible breadcrumb navigation (<nav aria-label="Breadcrumb">)`
			);

			// Author link to /about/
			const allAnchors = findTags(html, 'a');
			const hasAboutLink = allAnchors.some(
				(a) => a.attrs.href === '/about/' || a.attrs.href === `${SITE_URL}/about/`
			);
			assert.ok(
				hasAboutLink,
				`${post.relPath} must include an author link to /about/`
			);

			// Reading time in Thai (นาที)
			assert.ok(
				html.includes('นาที'),
				`${post.relPath} must display reading time containing "นาที"`
			);

			// Related posts links (links to other blog posts inside <main>)
			const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
			assert.ok(mainMatch, `${post.relPath} must have <main> block`);
			const mainAnchors = findTags(mainMatch[1], 'a');
			const relatedPostLinks = mainAnchors.filter((a) => {
				const rawHref = a.attrs.href || '';
				const href = rawHref.startsWith(SITE_URL) ? rawHref.slice(SITE_URL.length) : rawHref;
				if (!href.startsWith('/') || href.startsWith('//')) return false;
				if (
					href === '/' ||
					href.startsWith('/about/') ||
					href.startsWith('/posts/') ||
					href.startsWith('/projects/') ||
					href.startsWith('/tags/') ||
					href === `/${post.slug}/`
				) {
					return false;
				}
				return /^\/[^/]+\/$/.test(href);
			});
			assert.ok(
				relatedPostLinks.length >= 2,
				`${post.relPath} must include related/adjacent post links inside <main> (found ${relatedPostLinks.length})`
			);

			// All tag links end with trailing slash (/tags/.../)
			const tagAnchors = allAnchors.filter((a) => {
				const href = a.attrs.href || '';
				return href.startsWith('/tags/') || href.startsWith(`${SITE_URL}/tags/`);
			});
			assert.ok(tagAnchors.length >= 1, `${post.relPath} must have at least one tag link`);
			for (const tagAnchor of tagAnchors) {
				assert.ok(
					tagAnchor.attrs.href.endsWith('/'),
					`${post.relPath} tag link must end with trailing slash / (got "${tagAnchor.attrs.href}")`
				);
			}
		}
	});

	test('F5 & F14: Core pages have 0 broken internal links in dist/', () => {
		const corePages = [
			'index.html',
			'about/index.html',
			'posts/index.html',
			'projects/index.html',
			'tags/index.html',
			'404.html'
		];

		for (const relPath of corePages) {
			const html = readDistFile(relPath);
			const anchors = findTags(html, 'a');
			for (const anchor of anchors) {
				const rawHref = (anchor.attrs.href || '').trim();
				if (!rawHref || rawHref.startsWith('#') || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:')) {
					continue;
				}
				const internalHref = rawHref.startsWith(SITE_URL) ? rawHref.slice(SITE_URL.length) || '/' : rawHref;
				if (!internalHref.startsWith('/') || internalHref.startsWith('//')) {
					continue;
				}
				const pathname = decodeURIComponent(internalHref.split('#')[0].split('?')[0]);
				const hasExt = path.posix.extname(pathname) !== '';
				const targetPath = hasExt
					? path.join(DIST_DIR, pathname)
					: path.join(DIST_DIR, pathname, 'index.html');
				assert.ok(
					fs.existsSync(targetPath),
					`${relPath} has broken internal link href="${rawHref}" (missing ${path.relative(ROOT_DIR, targetPath)})`
				);
			}
		}
	});

	test('F15: Tag pages (/tags/[tag]/) have distinct <title> vs <meta name="description">, index multi-post tags, and noindex single-post thin tags', () => {
		const tagsDir = path.join(DIST_DIR, 'tags');
		assert.ok(fs.existsSync(tagsDir), 'dist/tags directory must exist');

		// Multi-post tag page: dist/tags/ai/index.html
		const aiTagHtml = readDistFile('tags/ai/index.html');
		const aiTitle = getTitle(aiTagHtml);
		const aiDesc = getMetaByName(aiTagHtml, 'description') || '';
		const aiRobots = getMetaByName(aiTagHtml, 'robots') || '';
		assert.notEqual(aiTitle, aiDesc, 'tags/ai/index.html must have distinct <title> and <meta name="description">');
		assert.ok(aiDesc.length >= 40, 'tags/ai/index.html description must be >= 40 chars');
		assert.ok(
			aiRobots.includes('index, follow'),
			`Multi-post tag page tags/ai/index.html must have "index, follow" in robots (got "${aiRobots}")`
		);

		// Scan a sample of tag pages to verify single-post thin tag pages have noindex
		const tagSubdirs = fs
			.readdirSync(tagsDir, { withFileTypes: true })
			.filter((e) => e.isDirectory() && fs.existsSync(path.join(tagsDir, e.name, 'index.html')))
			.map((e) => e.name);

		assert.ok(tagSubdirs.length > 50, `Expected > 50 tag subdirectories in dist/tags, found ${tagSubdirs.length}`);

		let foundSinglePostNoindex = 0;
		let foundMultiPostIndex = 0;

		for (const slug of tagSubdirs.slice(0, 120)) {
			const relPath = `tags/${slug}/index.html`;
			const html = readDistFile(relPath);
			const title = getTitle(html);
			const desc = getMetaByName(html, 'description') || '';
			const robots = (getMetaByName(html, 'robots') || '').toLowerCase();

			assert.notEqual(
				title.trim(),
				desc.trim(),
				`${relPath} must have distinct <title> and <meta name="description">`
			);

			if (robots.includes('noindex')) {
				foundSinglePostNoindex++;
			} else if (robots.includes('index, follow')) {
				foundMultiPostIndex++;
			}
		}

		assert.ok(
			foundSinglePostNoindex > 0,
			'Expected single-post thin tag pages in dist/tags/* to have noindex in <meta name="robots">'
		);
		assert.ok(
			foundMultiPostIndex > 0,
			'Expected multi-post tag pages in dist/tags/* to have index, follow in <meta name="robots">'
		);
	});

	test('F16: Paginated post pages (dist/posts/2/index.html) have distinct <title>, <meta name="description">, and <h1> from dist/posts/index.html, plus rel="prev" and rel="next"', () => {
		const page1Html = readDistFile('posts/index.html');
		const page2Html = readDistFile('posts/2/index.html');

		const title1 = getTitle(page1Html);
		const title2 = getTitle(page2Html);
		const desc1 = getMetaByName(page1Html, 'description') || '';
		const desc2 = getMetaByName(page2Html, 'description') || '';
		const h1Page1 = getH1s(page1Html)[0]?.text || '';
		const h1Page2 = getH1s(page2Html)[0]?.text || '';

		assert.notEqual(title2, title1, 'posts/2/index.html <title> must differ from posts/index.html');
		assert.notEqual(desc2, desc1, 'posts/2/index.html <meta name="description"> must differ from posts/index.html');
		assert.notEqual(h1Page2, h1Page1, 'posts/2/index.html <h1> must differ from posts/index.html');

		const prevLinks = getLinksByRel(page2Html, 'prev');
		const nextLinks = getLinksByRel(page2Html, 'next');
		assert.ok(prevLinks.length === 1 && prevLinks[0].attrs.href, 'posts/2/index.html must have <link rel="prev">');
		assert.ok(nextLinks.length === 1 && nextLinks[0].attrs.href, 'posts/2/index.html must have <link rel="next">');
	});

	test('F17: dist/index.html hero avatar image has loading="eager" and fetchpriority="high"', () => {
		const indexHtml = readDistFile('index.html');
		const imgs = findTags(indexHtml, 'img');
		assert.ok(imgs.length >= 1, 'dist/index.html must contain at least one <img>');

		const eagerHighPriorityImg = imgs.find(
			(img) =>
				img.attrs.loading?.toLowerCase() === 'eager' &&
				img.attrs.fetchpriority?.toLowerCase() === 'high'
		);
		assert.ok(
			eagerHighPriorityImg,
			`dist/index.html hero avatar <img> must have loading="eager" and fetchpriority="high" (found imgs: ${JSON.stringify(imgs.map((i) => i.attrs))})`
		);
	});
});
