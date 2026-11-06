import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_TAGLINE, SITE_DESCRIPTION, SITE_AUTHOR } from '../consts';

export const GET: APIRoute = async ({ site }) => {
	const siteOrigin = (site ? site.toString() : 'https://warongkon-blog.vercel.app').replace(/\/+$/, '');
	const posts = (await getCollection('blog')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);

	const recentPosts = posts.slice(0, 25);
	const engineeringPosts = posts
		.filter((p) =>
			(p.data.tags || []).some((t) =>
				/software|architecture|c#|\.net|database|sql|docker|kubernetes|api|testing|devops|clean code/i.test(t)
			)
		)
		.slice(0, 20);

	const lines = [
		`# ${SITE_TITLE}`,
		'',
		`> ${SITE_TAGLINE}`,
		'',
		`${SITE_DESCRIPTION}`,
		'',
		'## Author (E-E-A-T Entity)',
		`- **Name**: ${SITE_AUTHOR.name} (warongkon / ${SITE_AUTHOR.alternateName})`,
		`- **Known As**: Warongkon Fukthongyoo, warongkon, วรงค์กรณ์ ฟักทองอยู่, วรงค์กร ฟักทองอยู่`,
		`- **Role**: ${SITE_AUTHOR.jobTitle}`,
		`- **Expertise**: ${SITE_AUTHOR.knowsAbout.join(', ')}`,
		`- **About URL**: ${SITE_AUTHOR.url}`,
		`- **GitHub**: ${SITE_AUTHOR.github}`,
		`- **LinkedIn**: ${SITE_AUTHOR.linkedin}`,
		'',
		'## Key Site Navigation & Endpoints',
		`- [Homepage](${siteOrigin}/): หน้าแรก รวมบทความล่าสุด หมวดหมู่หลัก และโปรเจกต์ของ Warongkon`,
		`- [All Blog Posts](${siteOrigin}/posts/): คลังบทความเทคโนโลยี AI และ Software Engineering ทั้งหมด (${posts.length} บทความ)`,
		`- [Topic Tags](${siteOrigin}/tags/): สารบัญหมวดหมู่และแท็กบทความทั้งหมด`,
		`- [Projects Portfolio](${siteOrigin}/projects/): ผลงานและโปรเจกต์ด้าน Software Engineering`,
		`- [About Warongkon](${siteOrigin}/about/): ประวัติ ประสบการณ์ และความเชี่ยวชาญของผู้เขียน`,
		`- [Full LLM Article Index](${siteOrigin}/llms-full.txt): ดัชนีบทความทั้งหมดพร้อมคำอธิบายฉบับเต็มสำหรับ AI/LLM`,
		`- [RSS Feed](${siteOrigin}/rss.xml): ฟีดบทความ XML ล่าสุด`,
		`- [Sitemap Index](${siteOrigin}/sitemap-index.xml): แผนผังเว็บไซต์ XML`,
		'',
		'## Core Topic Pillars',
		`- [Artificial Intelligence (AI & LLM)](${siteOrigin}/tags/ai/): ข่าวสาร AI ระดับโลก, Generative AI, AI Agents, World Models`,
		`- [Software Engineering & Architecture](${siteOrigin}/tags/architecture/): System Design, Clean Architecture, SOLID, C#, ASP.NET Core, Microservices`,
		`- [Hardware & Cloud Infrastructure](${siteOrigin}/tags/hardware/): Data Center, GPU/TPU/NPU, Cloud Computing, Liquid Cooling`,
		`- [Thailand & Southeast Asia Tech](${siteOrigin}/tags/thailand/): เทรนด์เทคโนโลยีไทยและอาเซียน (SEA), Digital Economy, Sovereign AI`,
		`- [Games & Consumer Tech](${siteOrigin}/tags/games/): วงการเกม, คอนโซล, Spatial Computing และอุปกรณ์อัจฉริยะ`,
		'',
		'## Featured Software Engineering & Architecture Deep-Dives',
		...engineeringPosts.map(
			(post) =>
				`- [${post.data.title}](${siteOrigin}/${post.slug}/): ${post.data.description} (${post.data.pubDate.toISOString().slice(0, 10)})`
		),
		'',
		'## Latest Published Articles',
		...recentPosts.map(
			(post) =>
				`- [${post.data.title}](${siteOrigin}/${post.slug}/): ${post.data.description} (${post.data.pubDate.toISOString().slice(0, 10)})`
		),
		''
	];

	return new Response(lines.join('\n'), {
		status: 200,
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
};
