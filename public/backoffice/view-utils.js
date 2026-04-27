export function normalizeDate(value) {
	return value ? String(value).slice(0, 10) : '';
}

export function slugify(input) {
	return String(input)
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9\s-]/g, ' ')
		.trim()
		.replace(/[\s-]+/g, '-');
}

export function escapeHtml(value) {
	return String(value)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}

export function renderTags(tags) {
	if (!tags.length) return '<span class="chip">No tags</span>';

	return tags
		.slice(0, 3)
		.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`)
		.join('');
}
