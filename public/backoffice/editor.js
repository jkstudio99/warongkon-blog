import { api } from './api.js';
import { initPreferences, t } from './preferences.js';
import { normalizeDate, slugify } from './view-utils.js';

initPreferences();

const mode = location.pathname.includes('/edit') ? 'edit' : 'create';
const params = new URLSearchParams(location.search);
const originalSlug = params.get('slug') || '';
let coverDataUrl = '';
let currentPost = null;
let statusKey = '';

const els = {
	body: document.querySelector('#bodyInput'),
	cover: document.querySelector('#coverInput'),
	coverPreview: document.querySelector('#coverPreview'),
	deleteButton: document.querySelector('#deleteButton'),
	description: document.querySelector('#descriptionInput'),
	form: document.querySelector('#postForm'),
	pageTitle: document.querySelector('#pageTitle'),
	pubDate: document.querySelector('#pubDateInput'),
	removeCover: document.querySelector('#removeCoverInput'),
	saveButton: document.querySelector('#saveButton'),
	seoTitle: document.querySelector('#seoTitleInput'),
	slug: document.querySelector('#slugInput'),
	slugButton: document.querySelector('#slugButton'),
	status: document.querySelector('#statusText'),
	tags: document.querySelector('#tagsInput'),
	title: document.querySelector('#titleInput'),
	updatedDate: document.querySelector('#updatedDateInput')
};

els.slugButton.addEventListener('click', () => {
	els.slug.value = slugify(els.title.value || 'new-post');
});
els.title.addEventListener('blur', () => {
	if (mode === 'create' && !els.slug.value.trim()) {
		els.slug.value = slugify(els.title.value || 'new-post');
	}
});
els.cover.addEventListener('change', handleCoverChange);
els.saveButton.addEventListener('click', savePost);
els.deleteButton?.addEventListener('click', deletePost);
window.addEventListener('backoffice:language-change', () => {
	if (statusKey) setStatus(statusKey);
	if (currentPost && els.pageTitle) {
		els.pageTitle.textContent = currentPost.title || currentPost.slug;
	}
});

if (mode === 'edit') {
	await loadPost();
} else {
	els.pubDate.value = new Date().toISOString().slice(0, 10);
	els.body.value = t('editor.defaultBody');
	setStatus('status.create');
}

async function loadPost() {
	if (!originalSlug) {
		window.location.href = '/backoffice/';
		return;
	}

	setStatus('status.loading');
	currentPost = await api.getPost(originalSlug);
	fillForm(currentPost);
	setStatus('status.edit');
}

function fillForm(post) {
	els.title.value = post.title || '';
	els.slug.value = post.slug || '';
	els.seoTitle.value = post.seoTitle || '';
	els.description.value = post.description || '';
	els.pubDate.value = normalizeDate(post.pubDate);
	els.updatedDate.value = normalizeDate(post.updatedDate);
	els.tags.value = (post.tags || []).join(', ');
	els.body.value = post.body || '';
	els.pageTitle.textContent = post.title || post.slug;
	setCoverPreview(post.coverUrl || '');
}

async function handleCoverChange(event) {
	const file = event.target.files?.[0];
	if (!file) return;

	coverDataUrl = await readFileAsDataUrl(file);
	setCoverPreview(coverDataUrl);
	if (els.removeCover) els.removeCover.checked = false;
}

async function savePost() {
	if (!els.form.reportValidity()) return;

	setStatus(mode === 'create' ? 'status.creating' : 'status.updating');
	const payload = getPayload();
	const saved = mode === 'create' ? await api.createPost(payload) : await api.updatePost(originalSlug, payload);

	window.location.href = `/backoffice/edit?slug=${encodeURIComponent(saved.slug)}`;
}

async function deletePost() {
	if (!originalSlug) return;
	if (!window.confirm(t('confirm.delete', { slug: originalSlug }))) return;

	setStatus('status.deleting');
	await api.deletePost(originalSlug);
	window.location.href = '/backoffice/';
}

function getPayload() {
	const removeCover = Boolean(els.removeCover?.checked);
	const shouldKeepCover = Boolean(coverDataUrl || (!removeCover && hasCover()));

	return {
		title: els.title.value.trim(),
		slug: els.slug.value.trim(),
		seoTitle: els.seoTitle.value.trim(),
		description: els.description.value.trim(),
		pubDate: els.pubDate.value,
		updatedDate: els.updatedDate.value,
		tags: els.tags.value.split(',').map((tag) => tag.trim()).filter(Boolean),
		body: els.body.value,
		coverImage: shouldKeepCover ? './cover.jpg' : '',
		coverDataUrl,
		removeCover
	};
}

function setCoverPreview(src) {
	els.coverPreview.src = src || '';
	els.coverPreview.parentElement.classList.toggle('has-image', Boolean(src));
}

function hasCover() {
	return els.coverPreview.parentElement.classList.contains('has-image');
}

function setStatus(key) {
	statusKey = key;
	els.status.textContent = t(key);
}

function readFileAsDataUrl(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(String(reader.result));
		reader.onerror = () => reject(reader.error);
		reader.readAsDataURL(file);
	});
}
