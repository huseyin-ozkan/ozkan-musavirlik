import * as api from '$lib/common/api.js'

export async function load({ params, fetch }) {
	try {
		const [branches, posts] = await Promise.all([
			api.getBranches(),
			(await fetch('./api/posts').then((res) => res.json())).posts
		])

		return {
			posts,
			branches
		}
	} catch (error) {
		console.error(error)

		// TODO redirect to maintenance page
		throw error
	}
}
