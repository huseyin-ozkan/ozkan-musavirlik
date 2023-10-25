import * as api from '$lib/common/api.js'

export async function load({ params, fetch }) {
	try {
		const [hero, about, staff, branches, posts] = await Promise.all([
			api.getHero(),
			api.getAbout(),
			api.getStaff(),
			api.getBranches(),
			(await fetch('./api/posts').then((res) => res.json())).posts
		])

		return {
			hero,
			about,
			staff,
			branches,
			posts
		}
	} catch (error) {
		console.error(error)

		// TODO redirect to maintenance page
		throw error
	}
}
