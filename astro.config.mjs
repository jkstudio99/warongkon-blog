import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';

const SITE_URL = (process.env.SITE_URL || 'https://warongkon-blog.vercel.app').replace(/\/+$/, '');

function slugifyTag(input) {
	if (!input) return '';
	return String(input)
		.toLowerCase()
		.trim()
		.normalize('NFC')
		.replace(/[^a-z0-9\u0E00-\u0E7F\s-]/g, ' ')
		.trim()
		.replace(/[\s-]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

function extractTagsFromFrontmatter(fm) {
	const bracketMatch = fm.match(/^tags:\s*\[([\s\S]*?)\]/m);
	if (bracketMatch) {
		const inner = bracketMatch[1];
		const tags = [];
		const itemRegex = /"([^"]+)"|'([^']+)'/g;
		let m;
		while ((m = itemRegex.exec(inner)) !== null) {
			tags.push((m[1] ?? m[2]).trim());
		}
		return tags;
	}
	const blockMatch = fm.match(/^tags:\s*\r?\n((?:[ \t]*-[ \t]*[^\r\n]+\r?\n?)+)/m);
	if (blockMatch) {
		return blockMatch[1]
			.split(/\r?\n/)
			.map((line) =>
				line
					.replace(/^[ \t]*-[ \t]*/, '')
					.trim()
					.replace(/^(['"])(.*)\1$/, '$2')
					.trim()
			)
			.filter(Boolean);
	}
	return [];
}

function buildBlogMetadataMap() {
	const blogDir = path.resolve(process.cwd(), 'src/content/blog');
	const postDatesBySlug = new Map();
	const tagCountsBySlug = new Map();
	const tagLatestDateBySlug = new Map();
	let latestSiteDate = new Date('2026-01-01T00:00:00.000Z');

	if (!fs.existsSync(blogDir)) {
		return { postDatesBySlug, tagCountsBySlug, tagLatestDateBySlug, latestSiteDate };
	}

	const entries = fs.readdirSync(blogDir, { withFileTypes: true });
	for (const entry of entries) {
		if (!entry.isDirectory()) continue;
		const dirPath = path.join(blogDir, entry.name);
		const mdPath = fs.existsSync(path.join(dirPath, 'index.md'))
			? path.join(dirPath, 'index.md')
			: fs.existsSync(path.join(dirPath, 'index.mdx'))
				? path.join(dirPath, 'index.mdx')
				: null;
		if (!mdPath) continue;

		const raw = fs.readFileSync(mdPath, 'utf8');
		const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
		if (!fmMatch) continue;
		const fm = fmMatch[1];

		const slugMatch = fm.match(/^slug:\s*['"]?([^'"\r\n]+)['"]?/m);
		const pubDateMatch = fm.match(/^pubDate:\s*['"]?([^'"\r\n]+)['"]?/m);
		const updatedDateMatch = fm.match(/^updatedDate:\s*['"]?([^'"\r\n]+)['"]?/m);

		const routeSlug = (slugMatch ? slugMatch[1].trim() : entry.name).toLowerCase();
		const dateStr = (updatedDateMatch ? updatedDateMatch[1] : pubDateMatch ? pubDateMatch[1] : '').trim();
		const parsedDate = dateStr ? new Date(dateStr) : new Date('2026-01-01T00:00:00.000Z');
		const validDate = Number.isNaN(parsedDate.getTime()) ? new Date('2026-01-01T00:00:00.000Z') : parsedDate;

		postDatesBySlug.set(routeSlug, validDate);
		if (validDate > latestSiteDate) {
			latestSiteDate = validDate;
		}

		const parsedTags = extractTagsFromFrontmatter(fm);
		const seenInPost = new Set();
		for (const t of parsedTags) {
			const tagSlug = slugifyTag(t);
			if (!tagSlug || seenInPost.has(tagSlug)) continue;
			seenInPost.add(tagSlug);
			tagCountsBySlug.set(tagSlug, (tagCountsBySlug.get(tagSlug) || 0) + 1);
			const prevTagDate = tagLatestDateBySlug.get(tagSlug);
			if (!prevTagDate || validDate > prevTagDate) {
				tagLatestDateBySlug.set(tagSlug, validDate);
			}
		}
	}

	return { postDatesBySlug, tagCountsBySlug, tagLatestDateBySlug, latestSiteDate };
}

const { postDatesBySlug, tagCountsBySlug, tagLatestDateBySlug, latestSiteDate } = buildBlogMetadataMap();

export default defineConfig({
	// ตั้งค่า SITE_URL ได้ผ่าน env; ค่าเริ่มต้นคือ Vercel production URL
	site: SITE_URL,
	trailingSlash: 'always',
	outDir: './dist',
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => {
				const url = new URL(page);
				const pathname = url.pathname;
				if (pathname.startsWith('/backoffice') || pathname.startsWith('/404')) {
					return false;
				}
				// Exclude deep paginated post archive pages (/posts/2/ .. /posts/57/)
				if (/^\/posts\/\d+\/?$/.test(pathname)) {
					return false;
				}
				// Exclude single-post thin tag archive pages (/tags/<tag>/ with < 2 posts)
				const tagMatch = pathname.match(/^\/tags\/([^/]+)\/?$/);
				if (tagMatch) {
					const tagSlug = decodeURIComponent(tagMatch[1]);
					const count = tagCountsBySlug.get(tagSlug) || 0;
					return count >= 2;
				}
				return true;
			},
			serialize: (item) => {
				const url = new URL(item.url);
				const pathname = url.pathname;

				if (pathname === '/') {
					return {
						...item,
						lastmod: latestSiteDate.toISOString(),
						changefreq: 'daily',
						priority: 1.0
					};
				}

				if (
					pathname === '/posts/' ||
					pathname === '/about/' ||
					pathname === '/projects/' ||
					pathname === '/tags/'
				) {
					return {
						...item,
						lastmod: latestSiteDate.toISOString(),
						changefreq: 'weekly',
						priority: 0.8
					};
				}

				const tagMatch = pathname.match(/^\/tags\/([^/]+)\/?$/);
				if (tagMatch) {
					const tagSlug = decodeURIComponent(tagMatch[1]);
					const tagDate = tagLatestDateBySlug.get(tagSlug) || latestSiteDate;
					return {
						...item,
						lastmod: tagDate.toISOString(),
						changefreq: 'weekly',
						priority: 0.6
					};
				}

				const slug = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
				const postDate = postDatesBySlug.get(slug) || latestSiteDate;
				return {
					...item,
					lastmod: postDate.toISOString(),
					changefreq: 'monthly',
					priority: 0.9
				};
			}
		}),
		tailwind(),
		partytown()
	],
	markdown: {
		extendDefaultPlugins: true,
		rehypePlugins: [
			[
				autoNewTabExternalLinks,
				{
					domain: 'warongkon-blog.vercel.app'
				}
			]
		]
	}
});