const jsonHeaders = { 'Content-Type': 'application/json' };

export const api = {
	async listPosts() {
		return request('/api/v1/posts');
	},
	async getStats() {
		return request('/api/v1/stats');
	},
	async getPost(slug) {
		return request(`/api/v1/posts/${encodeURIComponent(slug)}`);
	},
	async createPost(payload) {
		return request('/api/v1/posts', { method: 'POST', body: payload });
	},
	async updatePost(slug, payload) {
		return request(`/api/v1/posts/${encodeURIComponent(slug)}`, { method: 'PUT', body: payload });
	},
	async deletePost(slug) {
		return request(`/api/v1/posts/${encodeURIComponent(slug)}`, { method: 'DELETE' });
	}
};

async function request(url, options = {}) {
	const response = await fetch(url, {
		method: options.method || 'GET',
		headers: options.body ? jsonHeaders : undefined,
		body: options.body ? JSON.stringify(options.body) : undefined
	});
	const payload = await response.json().catch(() => ({}));

	if (!response.ok) {
		throw new Error(payload.error?.message || 'Request failed');
	}

	return payload.data;
}
