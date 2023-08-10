import { createClient } from '@sanity/client'

const client = createClient({
	projectId: 'yl22p85a',
	dataset: 'production',
	apiVersion: '2023-06-25',
	useCdn: false
})

export async function GET({ params }) {
	const { slug } = params

	// at the moment, we use the _id as the slug
	// TODO use slug instead of _id

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
