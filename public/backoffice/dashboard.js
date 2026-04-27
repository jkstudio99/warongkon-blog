import { api } from './api.js';
import { escapeHtml, normalizeDate, renderTags } from './view-utils.js';

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
		els.postList.innerHTML = '<tr><td class="empty-row" colspan="5">Cannot load posts. Restart the back office server and refresh this page.</td></tr>';
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
		els.postList.innerHTML = '<tr><td class="empty-row" colspan="5">No posts found</td></tr>';
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
			<td><div class="tag-stack">${renderTags(post.tags || [])}</div></td>
			<td>${post.hasCover ? '<span class="cover-dot">Ready</span>' : '<span class="cover-dot empty">Missing</span>'}</td>
			<td>
				<div class="row-actions">
					<a class="button ghost compact" href="/${encodeURIComponent(post.slug)}/" target="_blank" rel="noreferrer">View</a>
					<a class="button compact" href="/backoffice/edit?slug=${encodeURIComponent(post.slug)}">Edit</a>
					<button class="button danger compact" type="button" data-delete-slug="${escapeHtml(post.slug)}">Delete</button>
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
	if (!window.confirm(`Delete "${slug}" and all files inside it?`)) return;

	try {
		await api.deletePost(slug);
		await loadDashboard();
	} catch (error) {
		console.error(error);
		window.alert(error.message || 'Cannot delete post');
	}
}
