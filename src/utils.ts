import { loadEnv } from 'vite';

const { GITHUB_PERSONAL_ACCESS_TOKEN } = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');

const ACRONYMS = new Set([
	'AI',
	'AWS',
	'SEA',
	'NVIDIA',
	'SQL',
	'API',
	'LLM',
	'GPU',
	'CPU',
	'RAM',
	'UX',
	'UI',
	'IOS',
	'VR',
	'AR',
	'ERP',
	'SAAS',
	'IOT',
	'5G',
	'6G',
	'PC',
	'IT',
	'SEO',
	'EV',
	'AAA',
	'NPU',
	'TPU',
	'AMD',
	'SDK',
	'CLI',
	'SSR',
	'SSG',
	'CSS',
	'HTML'
]);

export const slugify = (input: string) => {
	if (!input) return '';

	// Make lower case and trim
	let slug = input.toLowerCase().trim();

	// Remove Latin combining diacritics while preserving Thai combining marks (\u0E00-\u0E7F)
	slug = slug.normalize('NFC');

	// Allow ASCII alphanumeric, Thai Unicode characters (\u0E00-\u0E7F), spaces, and hyphens
	slug = slug.replace(/[^a-z0-9\u0E00-\u0E7F\s-]/g, ' ').trim();

	// Replace multiple spaces or hyphens with a single hyphen
	slug = slug.replace(/[\s-]+/g, '-').replace(/^-+|-+$/g, '');

	return slug;
};

export const unslugify = (slug: string) =>
	slug
		.replace(/\-/g, ' ')
		.replace(/\S+/g, (word) => {
			const upper = word.toUpperCase();
			if (ACRONYMS.has(upper)) {
				return upper;
			}
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		});

export const kFormatter = (num: number) => {
	return Math.abs(num) > 999 ? (Math.sign(num) * (Math.abs(num) / 1000)).toFixed(1) + 'k' : Math.sign(num) * Math.abs(num);
};

export const getRepositoryDetails = async (repositoryFullname: string) => {
	const headers: Record<string, string> = {
		'X-GitHub-Api-Version': '2022-11-28'
	};

	if (GITHUB_PERSONAL_ACCESS_TOKEN) {
		headers.Authorization = `Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`;
	}

	try {
		const repoDetails = await fetch('https://api.github.com/repos/' + repositoryFullname, {
			method: 'GET',
			headers
		});

		if (!repoDetails.ok) {
			return {};
		}

		const response = await repoDetails.json();
		return response;
	} catch {
		return {};
	}
};
