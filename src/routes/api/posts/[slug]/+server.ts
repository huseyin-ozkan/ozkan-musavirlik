
import { client } from '$lib/config/sanity'

export async function GET({ params }) {
	const { slug } = params

	const data: SanityPost[] = await client.fetch(`*[_type == "post" && slug.current == "${slug}"]`)

	// TODO get image url from sanity

	const data = await client.fetch(`*[_type == "post" && _id == "${slug}"]`)

	return new Response(
		JSON.stringify({
			data: {
				post: {
					id: data[0]._id,
					slug: data[0].title.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
					createdAt: new Date(data[0]._createdAt),
					updatedAt: new Date(data[0]._updatedAt),
					title: data[0].title,
					body: data[0].body
				}
			}
		})
	)
}
