import { client } from '$lib/config/sanity.js'

export async function load({ params, fetch }) {
	try {
		const hero = (await client.fetch<Content.Hero[]>(`*[_type == "hero"]`))[0]

		const posts: Post[] = (await fetch('./api/posts').then((res) => res.json())).posts

		const about = (await client.fetch<Content.About[]>(`*[_type == "about"]`))[0]

		const branches = await client.fetch<Content.Branch[]>(`*[_type == "branch"]`)

	const posts: Post[] = data.posts
	console.log('load page: ', posts)

		return {
			hero,
			posts,
			about
		}
	} catch (error) {
		console.error(error)

		// TODO redirect to maintenance page
		throw error
	}
}
