import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { slugify } from '../utils';

function escapeXml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export const GET: APIRoute = async ({ site }) => {
	const siteOrigin = (site ? site.toString() : 'https://warongkon-blog.vercel.app').replace(/\/+$/, '');
	const posts = (await getCollection('blog')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);

	const latestPostDate =
		posts.length > 0
			? (posts[0].data.updatedDate || posts[0].data.pubDate).toISOString()
			: new Date().toISOString();

	const tagStats = new Map<string, { count: number; lastmod: Date }>();
	for (const post of posts) {
		const postDate = post.data.updatedDate || post.data.pubDate;
		const seenInPost = new Set<string>();
		for (const rawTag of post.data.tags || []) {
			const tagSlug = slugify(rawTag);
			if (!tagSlug || seenInPost.has(tagSlug)) continue;
			seenInPost.add(tagSlug);
			const existing = tagStats.get(tagSlug);
			if (existing) {
				existing.count += 1;
				if (postDate > existing.lastmod) {
					existing.lastmod = postDate;
				}
			} else {
				tagStats.set(tagSlug, { count: 1, lastmod: postDate });
			}
		}
	}

	const urls: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [
		{
			loc: `${siteOrigin}/`,
			lastmod: latestPostDate,
			changefreq: 'daily',
			priority: '1.0'
		},
		{
			loc: `${siteOrigin}/posts/`,
			lastmod: latestPostDate,
			changefreq: 'daily',
			priority: '0.9'
		},
		{
			loc: `${siteOrigin}/about/`,
			lastmod: latestPostDate,
			changefreq: 'monthly',
			priority: '0.8'
		},
		{
			loc: `${siteOrigin}/projects/`,
			lastmod: latestPostDate,
			changefreq: 'monthly',
			priority: '0.8'
		},
		{
			loc: `${siteOrigin}/tags/`,
			lastmod: latestPostDate,
			changefreq: 'weekly',
			priority: '0.7'
		}
	];

	for (const post of posts) {
		const postDate = (post.data.updatedDate || post.data.pubDate).toISOString();
		urls.push({
			loc: `${siteOrigin}/${post.slug}/`,
			lastmod: postDate,
			changefreq: 'monthly',
			priority: '0.9'
		});
	}

	for (const [tagSlug, stat] of [...tagStats.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
		if (stat.count < 2) continue;
		urls.push({
			loc: `${siteOrigin}/tags/${tagSlug}/`,
			lastmod: stat.lastmod.toISOString(),
			changefreq: 'weekly',
			priority: '0.6'
		});
	}

	const xml = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...urls.map(
			(u) =>
				`  <url><loc>${escapeXml(u.loc)}</loc><lastmod>${u.lastmod}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`
		),
		'</urlset>',
		''
	].join('\n');

	return new Response(xml, {
		status: 200,
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
};
