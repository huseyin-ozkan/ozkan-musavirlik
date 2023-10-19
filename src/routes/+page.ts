import { client } from '$lib/config/sanity.js'

export async function load({ params, fetch }) {
	try {
		const hero = (await client.fetch<Content.Hero[]>(`*[_type == "hero"]`))[0]

		const posts: Post[] = (await fetch('./api/posts').then((res) => res.json())).posts

		const about = (await client.fetch<Content.About[]>(`*[_type == "about"]`))[0]

		const staff: Content.Staff[] = (await client.fetch(`*[_type == "staff"]`)).map(
			(staff: any) => ({
				...staff,
				image: staff.image?.asset._ref
			})
		)

		const branches = await client.fetch<Content.Branch[]>(`*[_type == "branch"]`)

		return {
			hero,
			posts,
			about,
			staff,
			branches
		}
	} catch (error) {
		console.error(error)

		// TODO redirect to maintenance page
		throw error
	}
}
