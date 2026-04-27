import { api } from './api.js';
import { initPreferences, t } from './preferences.js';
import { escapeHtml, normalizeDate, renderTags } from './view-utils.js';

initPreferences();

const pageSizeKey = 'warongkon.backoffice.pageSize';

const els = {
	coverCount: document.querySelector('#coverCount'),
	firstPageButton: document.querySelector('#firstPageButton'),
	lastPageButton: document.querySelector('#lastPageButton'),
	latestDate: document.querySelector('#latestDate'),
	nextPageButton: document.querySelector('#nextPageButton'),
	pageNumbers: document.querySelector('#pageNumbers'),
	pageSize: document.querySelector('#pageSizeSelect'),
	paginationRange: document.querySelector('#paginationRange'),
	postCount: document.querySelector('#postCount'),
	postList: document.querySelector('#postList'),
	prevPageButton: document.querySelector('#prevPageButton'),
	refreshButton: document.querySelector('#refreshButton'),
	search: document.querySelector('#searchInput'),
	tagCount: document.querySelector('#tagCount')
};

let currentPage = 1;
let pageSize = getStoredPageSize();
let posts = [];

els.pageSize.value = String(pageSize);
els.firstPageButton.addEventListener('click', () => goToPage(1));
els.prevPageButton.addEventListener('click', () => goToPage(currentPage - 1));
els.nextPageButton.addEventListener('click', () => goToPage(currentPage + 1));
els.lastPageButton.addEventListener('click', () => goToPage(getTotalPages(getFilteredPosts().length)));
els.pageSize.addEventListener('change', () => {
	pageSize = Number(els.pageSize.value);
	localStorage.setItem(pageSizeKey, String(pageSize));
	currentPage = 1;
	renderPosts();
});
els.refreshButton.addEventListener('click', loadDashboard);
els.search.addEventListener('input', () => {
	currentPage = 1;
	renderPosts();
});
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
		renderPagination(0);
	}
}

function renderStats(stats) {
	els.postCount.textContent = String(stats.totalPosts || 0);
	els.latestDate.textContent = normalizeDate(stats.latestDate) || '-';
	els.tagCount.textContent = String(stats.totalTags || 0);
	els.coverCount.textContent = String(stats.withCover || 0);
}

function renderPosts() {
	const filtered = getFilteredPosts();
	const totalPages = getTotalPages(filtered.length);
	currentPage = Math.min(currentPage, totalPages);
	const startIndex = (currentPage - 1) * pageSize;
	const paginatedPosts = filtered.slice(startIndex, startIndex + pageSize);

	els.postList.innerHTML = '';

	if (!filtered.length) {
		els.postList.innerHTML = `<tr><td class="empty-row" colspan="5">${escapeHtml(t('empty.noPosts'))}</td></tr>`;
		renderPagination(0);
		return;
	}

	for (const post of paginatedPosts) {
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
						<span class="lucide-icon lucide-eye" aria-hidden="true"></span>
						<span class="visually-hidden">${escapeHtml(t('actions.view'))}</span>
					</a>
					<a class="icon-button" href="/backoffice/edit?slug=${encodeURIComponent(post.slug)}" aria-label="${escapeHtml(t('actions.edit'))}" title="${escapeHtml(t('actions.edit'))}">
						<span class="lucide-icon lucide-square-pen" aria-hidden="true"></span>
						<span class="visually-hidden">${escapeHtml(t('actions.edit'))}</span>
					</a>
					<button class="icon-button danger" type="button" data-delete-slug="${escapeHtml(post.slug)}" aria-label="${escapeHtml(t('actions.delete'))}" title="${escapeHtml(t('actions.delete'))}">
						<span class="lucide-icon lucide-trash-2" aria-hidden="true"></span>
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

	renderPagination(filtered.length);
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

function getFilteredPosts() {
	const query = els.search.value.trim().toLowerCase();

	return posts.filter((post) => {
		const haystack = [post.title, post.slug, post.pubDate, ...(post.tags || [])].join(' ').toLowerCase();
		return haystack.includes(query);
	});
}

function getStoredPageSize() {
	const stored = Number(localStorage.getItem(pageSizeKey));
	return [5, 10, 20, 50].includes(stored) ? stored : 10;
}

function getTotalPages(total) {
	return Math.max(1, Math.ceil(total / pageSize));
}

function goToPage(page) {
	const totalPages = getTotalPages(getFilteredPosts().length);
	currentPage = Math.min(Math.max(1, page), totalPages);
	renderPosts();
}

function renderPagination(total) {
	const totalPages = getTotalPages(total);
	currentPage = Math.min(currentPage, totalPages);

	const start = total === 0 ? 0 : (currentPage - 1) * pageSize + 1;
	const end = total === 0 ? 0 : Math.min(currentPage * pageSize, total);

	els.paginationRange.textContent = t('pagination.range', { start, end, total });
	els.firstPageButton.disabled = currentPage <= 1 || total === 0;
	els.prevPageButton.disabled = currentPage <= 1 || total === 0;
	els.nextPageButton.disabled = currentPage >= totalPages || total === 0;
	els.lastPageButton.disabled = currentPage >= totalPages || total === 0;
	els.pageNumbers.innerHTML = '';

	for (const item of getPageItems(currentPage, totalPages)) {
		if (item === 'ellipsis') {
			const ellipsis = document.createElement('span');
			ellipsis.className = 'page-ellipsis';
			ellipsis.textContent = '...';
			els.pageNumbers.append(ellipsis);
			continue;
		}

		const button = document.createElement('button');
		button.className = 'page-number';
		button.type = 'button';
		button.textContent = String(item);
		button.setAttribute('aria-label', `${t('pagination.page')} ${item}`);

		if (item === currentPage) {
			button.classList.add('active');
			button.setAttribute('aria-current', 'page');
			button.title = t('pagination.pageInfo', { page: currentPage, totalPages });
		} else {
			button.addEventListener('click', () => goToPage(item));
		}

		els.pageNumbers.append(button);
	}
}

function getPageItems(page, totalPages) {
	if (totalPages <= 7) {
		return Array.from({ length: totalPages }, (_, index) => index + 1);
	}

	const items = new Set([1, totalPages, page - 1, page, page + 1]);

	if (page <= 3) {
		items.add(2);
		items.add(3);
		items.add(4);
	}

	if (page >= totalPages - 2) {
		items.add(totalPages - 3);
		items.add(totalPages - 2);
		items.add(totalPages - 1);
	}

	return [...items]
		.filter((item) => item >= 1 && item <= totalPages)
		.sort((a, b) => a - b)
		.reduce((acc, item, index, pages) => {
			if (index > 0 && item - pages[index - 1] > 1) {
				acc.push('ellipsis');
			}
			acc.push(item);
			return acc;
		}, []);
}
