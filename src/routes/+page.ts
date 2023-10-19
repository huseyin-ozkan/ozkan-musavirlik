import { client } from '$lib/config/sanity.js'

export async function load({ params, fetch }) {
	try {
		const hero = (await client.fetch<Content.Hero[]>(`*[_type == "hero"]`))[0]

		const posts: Post[] = (await fetch('./api/posts').then((res) => res.json())).posts

		const branches = await client.fetch<Content.Branch[]>(`*[_type == "branch"]`)

	const posts: Post[] = data.posts
	console.log('load page: ', posts)

		return {
			hero,
			posts
		}
	} catch (error) {
		console.error(error)

		// TODO redirect to maintenance page
	}
}
