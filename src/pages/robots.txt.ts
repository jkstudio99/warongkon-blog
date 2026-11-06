import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
	const siteOrigin = (site ? site.toString() : 'https://warongkon-blog.vercel.app').replace(/\/+$/, '');

	const body = [
		'# Warongkon Blog — robots.txt',
		'# https://warongkon-blog.vercel.app/',
		'',
		'User-agent: *',
		'Allow: /',
		'Disallow: /backoffice/',
		'Disallow: /404',
		'Disallow: /404/',
		'',
		'User-agent: Googlebot',
		'Allow: /',
		'Disallow: /backoffice/',
		'Disallow: /404',
		'',
		'User-agent: Bingbot',
		'Allow: /',
		'Disallow: /backoffice/',
		'Disallow: /404',
		'',
		'User-agent: GPTBot',
		'Allow: /',
		'Disallow: /backoffice/',
		'',
		'User-agent: OAI-SearchBot',
		'Allow: /',
		'Disallow: /backoffice/',
		'',
		'User-agent: ChatGPT-User',
		'Allow: /',
		'Disallow: /backoffice/',
		'',
		'User-agent: ClaudeBot',
		'Allow: /',
		'Disallow: /backoffice/',
		'',
		'User-agent: PerplexityBot',
		'Allow: /',
		'Disallow: /backoffice/',
		'',
		'User-agent: Google-Extended',
		'Allow: /',
		'Disallow: /backoffice/',
		'',
		`Sitemap: ${siteOrigin}/sitemap-index.xml`,
		`Sitemap: ${siteOrigin}/sitemap.xml`,
		''
	].join('\n');

	return new Response(body, {
		status: 200,
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
};
