import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_TAGLINE, SITE_DESCRIPTION, SITE_AUTHOR } from '../consts';

export const GET: APIRoute = async ({ site }) => {
	const siteOrigin = (site ? site.toString() : 'https://warongkon-blog.vercel.app').replace(/\/+$/, '');
	const posts = (await getCollection('blog')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);

	const lines = [
		`# ${SITE_TITLE} — Full Knowledge & Article Directory (llms-full.txt)`,
		'',
		`> ${SITE_TAGLINE}`,
		'',
		`${SITE_DESCRIPTION}`,
		'',
		`- **Author**: ${SITE_AUTHOR.name} (warongkon / ${SITE_AUTHOR.alternateName}) — ${SITE_AUTHOR.jobTitle}`,
		`- **Website**: ${siteOrigin}/`,
		`- **Author Profile**: ${SITE_AUTHOR.url}`,
		`- **Total Articles**: ${posts.length}`,
		'',
		'## Complete Chronological Article Directory',
		'',
		...posts.map((post) => {
			const dateStr = post.data.pubDate.toISOString().slice(0, 10);
			const tagsStr = (post.data.tags || []).join(', ');
			return `- [${post.data.title}](${siteOrigin}/${post.slug}/) | Date: ${dateStr} | Tags: ${tagsStr} — ${post.data.description}`;
		}),
		''
	];

	return new Response(lines.join('\n'), {
		status: 200,
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
};
