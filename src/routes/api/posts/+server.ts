import { createClient } from '@sanity/client'

const client = createClient({
	projectId: 'yl22p85a',
	dataset: 'production',
	apiVersion: '2023-06-25',
	useCdn: false
})

export async function GET({ params }) {
	const data = await client.fetch(`*[_type == "post"]`)

	if (data)
		return new Response(
			JSON.stringify({
				posts: data.map(
					(post: any): Post => ({
						id: post._id,
						slug: post.title.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
						createdAt: new Date(post._createdAt),
						updatedAt: new Date(post._updatedAt),
						title: post.title,
						body: post.body
					})
				) as Post[]
			})
		)

	return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
		status: 500
	})
}
