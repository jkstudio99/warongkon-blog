const languageKey = 'warongkon.backoffice.language';
const sidebarKey = 'warongkon.backoffice.sidebar';
const themeKey = 'warongkon.backoffice.theme';
const languages = new Set(['th', 'en']);
const sidebarStates = new Set(['expanded', 'collapsed']);
const themes = new Set(['light', 'dark', 'system']);

const dictionary = {
	en: {
		'actions.back': 'Back',
		'actions.cancel': 'Cancel',
		'actions.createPost': 'Create post',
		'actions.delete': 'Delete',
		'actions.edit': 'Edit',
		'actions.generate': 'Generate',
		'actions.newPost': 'New post',
		'actions.refresh': 'Refresh',
		'actions.updatePost': 'Update post',
		'actions.view': 'View',
		'alert.deleteFailed': 'Cannot delete post',
		'confirm.delete': 'Delete "{slug}" and all files inside it?',
		'cover.missing': 'Missing',
		'cover.ready': 'Ready',
		'create.help': 'Writes a new folder under src/content/blog',
		'create.mode': 'Create post',
		'create.status': 'Create',
		'create.title': 'Create Blog Post',
		'dashboard.label': 'Dashboard',
		'dashboard.title': 'Blog Management',
		'edit.help': 'Updates an existing Markdown entry',
		'edit.mode': 'Edit post',
		'edit.status': 'Edit',
		'edit.title': 'Edit Blog Post',
		'editor.defaultBody': 'Write your article content here.',
		'empty.loadError': 'Cannot load posts. Restart the back office server and refresh this page.',
		'empty.noPosts': 'No posts found',
		'form.content': 'Content',
		'form.cover': 'Cover',
		'form.coverSize': '960 x 480',
		'form.description': 'Description',
		'form.markdownBody': 'Markdown body',
		'form.meta': 'Meta',
		'form.published': 'Published',
		'form.removeCover': 'Remove current cover on save',
		'form.seoTitle': 'SEO title',
		'form.slug': 'Slug',
		'form.tags': 'Tags',
		'form.tagsPlaceholder': 'AI, Thailand, Tech Update',
		'form.title': 'Title',
		'form.updated': 'Updated',
		'form.uploadImage': 'Upload image',
		'library.label': 'Library',
		'library.title': 'Posts',
		'metrics.latestDate': 'Latest date',
		'metrics.tags': 'Tags',
		'metrics.totalPosts': 'Total posts',
		'metrics.withCover': 'With cover',
		'mode.label': 'Mode',
		'nav.content': 'Content',
		'nav.create': 'Create',
		'pagination.first': 'First page',
		'pagination.last': 'Last page',
		'pagination.next': 'Next page',
		'pagination.page': 'Page',
		'pagination.pageInfo': 'Page {page} of {totalPages}',
		'pagination.previous': 'Previous page',
		'pagination.range': 'Showing {start}-{end} of {total}',
		'pagination.rowsPerPage': 'Rows per page',
		'preferences.language': 'Language',
		'preferences.theme': 'Theme',
		'repository.label': 'Repository',
		'repository.source': 'Markdown content source',
		'search.posts': 'Search title, slug, tag',
		'sidebar.collapse': 'Collapse sidebar',
		'sidebar.expand': 'Expand sidebar',
		'status.create': 'Create',
		'status.creating': 'Creating',
		'status.deleting': 'Deleting',
		'status.edit': 'Edit',
		'status.loading': 'Loading',
		'status.updating': 'Updating',
		'table.actions': 'Actions',
		'table.cover': 'Cover',
		'table.date': 'Date',
		'table.tags': 'Tags',
		'table.title': 'Title',
		'tags.none': 'No tags',
		'theme.dark': 'Dark mode',
		'theme.light': 'Light mode',
		'theme.system': 'System mode',
		'title.create': 'Create Post | Blog Back Office',
		'title.dashboard': 'Blog Back Office',
		'title.edit': 'Edit Post | Blog Back Office'
	},
	th: {
		'actions.back': 'กลับ',
		'actions.cancel': 'ยกเลิก',
		'actions.createPost': 'สร้างบทความ',
		'actions.delete': 'ลบ',
		'actions.edit': 'แก้ไข',
		'actions.generate': 'สร้าง slug',
		'actions.newPost': 'บทความใหม่',
		'actions.refresh': 'รีเฟรช',
		'actions.updatePost': 'อัปเดตบทความ',
		'actions.view': 'ดูบทความ',
		'alert.deleteFailed': 'ลบบทความไม่สำเร็จ',
		'confirm.delete': 'ลบ "{slug}" พร้อมไฟล์ทั้งหมดในโฟลเดอร์นี้?',
		'cover.missing': 'ยังไม่มี',
		'cover.ready': 'พร้อมใช้',
		'create.help': 'สร้างโฟลเดอร์ใหม่ใน src/content/blog',
		'create.mode': 'สร้างบทความ',
		'create.status': 'สร้าง',
		'create.title': 'สร้างบทความใหม่',
		'dashboard.label': 'แดชบอร์ด',
		'dashboard.title': 'จัดการบล็อก',
		'edit.help': 'แก้ไข Markdown entry ที่มีอยู่',
		'edit.mode': 'แก้ไขบทความ',
		'edit.status': 'แก้ไข',
		'edit.title': 'แก้ไขบทความ',
		'editor.defaultBody': 'เขียนเนื้อหาบทความที่นี่',
		'empty.loadError': 'โหลดบทความไม่ได้ ลอง restart back office server แล้ว refresh หน้าอีกครั้ง',
		'empty.noPosts': 'ไม่พบบทความ',
		'form.content': 'เนื้อหา',
		'form.cover': 'รูปปก',
		'form.coverSize': '960 x 480',
		'form.description': 'คำอธิบาย',
		'form.markdownBody': 'เนื้อหา Markdown',
		'form.meta': 'ข้อมูลบทความ',
		'form.published': 'เผยแพร่',
		'form.removeCover': 'ลบรูปปกปัจจุบันตอนบันทึก',
		'form.seoTitle': 'ชื่อ SEO',
		'form.slug': 'Slug',
		'form.tags': 'แท็ก',
		'form.tagsPlaceholder': 'AI, Thailand, Tech Update',
		'form.title': 'ชื่อบทความ',
		'form.updated': 'อัปเดต',
		'form.uploadImage': 'อัปโหลดรูป',
		'library.label': 'คลังบทความ',
		'library.title': 'บทความ',
		'metrics.latestDate': 'วันที่ล่าสุด',
		'metrics.tags': 'แท็ก',
		'metrics.totalPosts': 'บทความทั้งหมด',
		'metrics.withCover': 'มีรูปปก',
		'mode.label': 'โหมด',
		'nav.content': 'เนื้อหา',
		'nav.create': 'สร้าง',
		'pagination.first': 'หน้าแรก',
		'pagination.last': 'หน้าสุดท้าย',
		'pagination.next': 'หน้าถัดไป',
		'pagination.page': 'หน้า',
		'pagination.pageInfo': 'หน้า {page} จาก {totalPages}',
		'pagination.previous': 'หน้าก่อนหน้า',
		'pagination.range': 'แสดง {start}-{end} จาก {total}',
		'pagination.rowsPerPage': 'รายการต่อหน้า',
		'preferences.language': 'ภาษา',
		'preferences.theme': 'ธีม',
		'repository.label': 'Repository',
		'repository.source': 'แหล่งไฟล์ Markdown',
		'search.posts': 'ค้นหาชื่อ, slug, แท็ก',
		'sidebar.collapse': 'ย่อ sidebar',
		'sidebar.expand': 'ขยาย sidebar',
		'status.create': 'สร้าง',
		'status.creating': 'กำลังสร้าง',
		'status.deleting': 'กำลังลบ',
		'status.edit': 'แก้ไข',
		'status.loading': 'กำลังโหลด',
		'status.updating': 'กำลังอัปเดต',
		'table.actions': 'จัดการ',
		'table.cover': 'รูปปก',
		'table.date': 'วันที่',
		'table.tags': 'แท็ก',
		'table.title': 'ชื่อบทความ',
		'tags.none': 'ไม่มีแท็ก',
		'theme.dark': 'โหมดมืด',
		'theme.light': 'โหมดสว่าง',
		'theme.system': 'ตามระบบ',
		'title.create': 'สร้างบทความ | Blog Back Office',
		'title.dashboard': 'Blog Back Office',
		'title.edit': 'แก้ไขบทความ | Blog Back Office'
	}
};

export function initPreferences() {
	applyTheme(getTheme());
	applySidebar(getSidebarState());
	applyLanguage(getLanguage());
	bindPreferenceControls();
	translatePage();
}

export function getLanguage() {
	const stored = localStorage.getItem(languageKey);
	return languages.has(stored) ? stored : 'th';
}

export function getTheme() {
	const stored = localStorage.getItem(themeKey);
	return themes.has(stored) ? stored : 'system';
}

export function getSidebarState() {
	const stored = localStorage.getItem(sidebarKey);
	return sidebarStates.has(stored) ? stored : 'expanded';
}

export function t(key, values = {}) {
	const template = dictionary[getLanguage()]?.[key] || dictionary.en[key] || key;
	return Object.entries(values).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, String(value)), template);
}

export function translatePage(root = document) {
	if (document.body?.dataset.i18nDocumentTitle) {
		document.title = t(document.body.dataset.i18nDocumentTitle);
	}

	root.querySelectorAll('[data-i18n]').forEach((element) => {
		element.textContent = t(element.dataset.i18n);
	});
	root.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
		element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder));
	});
	root.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
		element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel));
	});
	root.querySelectorAll('[data-i18n-title]').forEach((element) => {
		element.setAttribute('title', t(element.dataset.i18nTitle));
	});
}

function bindPreferenceControls() {
	document.querySelectorAll('[data-lang-option]').forEach((button) => {
		button.addEventListener('click', () => {
			setLanguage(button.dataset.langOption);
		});
	});

	document.querySelectorAll('[data-theme-option]').forEach((button) => {
		button.addEventListener('click', () => {
			setTheme(button.dataset.themeOption);
		});
	});
	document.querySelectorAll('[data-sidebar-toggle]').forEach((button) => {
		button.addEventListener('click', toggleSidebar);
	});

	updatePreferenceControls();
}

function setLanguage(language) {
	if (!languages.has(language)) return;
	localStorage.setItem(languageKey, language);
	applyLanguage(language);
	translatePage();
	updatePreferenceControls();
	window.dispatchEvent(new CustomEvent('backoffice:language-change', { detail: { language } }));
}

function setTheme(theme) {
	if (!themes.has(theme)) return;
	localStorage.setItem(themeKey, theme);
	applyTheme(theme);
	updatePreferenceControls();
}

function toggleSidebar() {
	const nextState = getSidebarState() === 'collapsed' ? 'expanded' : 'collapsed';
	localStorage.setItem(sidebarKey, nextState);
	applySidebar(nextState);
	updatePreferenceControls();
}

function applyLanguage(language) {
	document.documentElement.lang = language;
}

function applyTheme(theme) {
	document.documentElement.dataset.theme = theme;
}

function applySidebar(state) {
	document.documentElement.dataset.sidebar = state;
}

function updatePreferenceControls() {
	const language = getLanguage();
	const sidebarState = getSidebarState();
	const theme = getTheme();

	document.querySelectorAll('[data-lang-option]').forEach((button) => {
		const isActive = button.dataset.langOption === language;
		button.classList.toggle('active', isActive);
		button.setAttribute('aria-pressed', String(isActive));
	});

	document.querySelectorAll('[data-theme-option]').forEach((button) => {
		const isActive = button.dataset.themeOption === theme;
		button.classList.toggle('active', isActive);
		button.setAttribute('aria-pressed', String(isActive));
	});

	document.querySelectorAll('[data-sidebar-toggle]').forEach((button) => {
		const label = t(sidebarState === 'collapsed' ? 'sidebar.expand' : 'sidebar.collapse');
		button.setAttribute('aria-label', label);
		button.setAttribute('title', label);
		button.setAttribute('aria-expanded', String(sidebarState !== 'collapsed'));
	});
}
