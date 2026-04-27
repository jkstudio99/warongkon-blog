import { api } from './api.js';
import { initPreferences, t } from './preferences.js';
import { escapeHtml, normalizeDate, renderTags } from './view-utils.js';

initPreferences();

const els = {
	coverCount: document.querySelector('#coverCount'),
	latestDate: document.querySelector('#latestDate'),
	postCount: document.querySelector('#postCount'),
	postList: document.querySelector('#postList'),
	refreshButton: document.querySelector('#refreshButton'),
	search: document.querySelector('#searchInput'),
	tagCount: document.querySelector('#tagCount')
};

let posts = [];

els.refreshButton.addEventListener('click', loadDashboard);
els.search.addEventListener('input', renderPosts);
window.addEventListener('backoffice:language-change', renderPosts);

await loadDashboard();

async function loadDashboard() {
	try {
		const [postData, stats] = await Promise.all([api.listPosts(), api.getStats()]);
		posts = postData;
		renderStats(stats);
		renderPosts();
	} catch (error) {
		console.error(error);
		posts = [];
		renderStats({});
		els.postList.innerHTML = `<tr><td class="empty-row" colspan="5">${escapeHtml(t('empty.loadError'))}</td></tr>`;
	}
}

function renderStats(stats) {
	els.postCount.textContent = String(stats.totalPosts || 0);
	els.latestDate.textContent = normalizeDate(stats.latestDate) || '-';
	els.tagCount.textContent = String(stats.totalTags || 0);
	els.coverCount.textContent = String(stats.withCover || 0);
}

function renderPosts() {
	const query = els.search.value.trim().toLowerCase();
	const filtered = posts.filter((post) => {
		const haystack = [post.title, post.slug, post.pubDate, ...(post.tags || [])].join(' ').toLowerCase();
		return haystack.includes(query);
	});

	els.postList.innerHTML = '';

	if (!filtered.length) {
		els.postList.innerHTML = `<tr><td class="empty-row" colspan="5">${escapeHtml(t('empty.noPosts'))}</td></tr>`;
		return;
	}

	for (const post of filtered) {
		const row = document.createElement('tr');
		row.innerHTML = `
			<td>
				<div class="title-cell">
					<strong>${escapeHtml(post.title || post.slug)}</strong>
					<span>${escapeHtml(post.slug)}</span>
				</div>
			</td>
			<td>${escapeHtml(normalizeDate(post.pubDate) || '-')}</td>
			<td><div class="tag-stack">${renderTags(post.tags || [], t('tags.none'))}</div></td>
			<td>${post.hasCover ? `<span class="cover-dot">${escapeHtml(t('cover.ready'))}</span>` : `<span class="cover-dot empty">${escapeHtml(t('cover.missing'))}</span>`}</td>
			<td>
				<div class="row-actions" aria-label="${escapeHtml(t('table.actions'))}">
					<a class="icon-button" href="/${encodeURIComponent(post.slug)}/" target="_blank" rel="noreferrer" aria-label="${escapeHtml(t('actions.view'))}" title="${escapeHtml(t('actions.view'))}">
						${icon('view')}
						<span class="visually-hidden">${escapeHtml(t('actions.view'))}</span>
					</a>
					<a class="icon-button" href="/backoffice/edit?slug=${encodeURIComponent(post.slug)}" aria-label="${escapeHtml(t('actions.edit'))}" title="${escapeHtml(t('actions.edit'))}">
						${icon('edit')}
						<span class="visually-hidden">${escapeHtml(t('actions.edit'))}</span>
					</a>
					<button class="icon-button danger" type="button" data-delete-slug="${escapeHtml(post.slug)}" aria-label="${escapeHtml(t('actions.delete'))}" title="${escapeHtml(t('actions.delete'))}">
						${icon('delete')}
						<span class="visually-hidden">${escapeHtml(t('actions.delete'))}</span>
					</button>
				</div>
			</td>
		`;
		row.querySelector('.row-actions')?.addEventListener('dblclick', (event) => event.stopPropagation());
		row.querySelector('[data-delete-slug]')?.addEventListener('click', (event) => {
			event.stopPropagation();
			deletePost(post.slug);
		});
		row.addEventListener('dblclick', () => {
			window.location.href = `/backoffice/edit?slug=${encodeURIComponent(post.slug)}`;
		});
		els.postList.append(row);
	}
}

async function deletePost(slug) {
	if (!window.confirm(t('confirm.delete', { slug }))) return;

	try {
		await api.deletePost(slug);
		await loadDashboard();
	} catch (error) {
		console.error(error);
		window.alert(error.message || t('alert.deleteFailed'));
	}
}

function icon(name) {
	const icons = {
		delete: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16" /><path d="M10 11v6M14 11v6" /><path d="M6 7l1 14h10l1-14" /><path d="M9 7V4h6v3" /></svg>',
		edit: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>',
		view: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></svg>'
	};

	return icons[name] || '';
}
