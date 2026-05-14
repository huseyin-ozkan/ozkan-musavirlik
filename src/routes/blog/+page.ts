import * as api from '$lib/common/api.js'

export async function load({ fetch }) {
	try {
		const [branches, posts, announcements] = await Promise.all([
			api.getBranches(),
			(await fetch('./api/posts').then((res) => res.json())).posts,
			api.announcements.getAll()
		])

		return {
			posts,
			branches,
			announcements
		}
	} catch (error) {
		console.error(error)

		// TODO redirect to maintenance page
		throw error
	}
}
