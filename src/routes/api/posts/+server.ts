import { client } from '$lib/config/sanity'
import { convertBackendPostToPost } from '$lib/utils.js'

export async function GET({ params }) {
	const data: SanityPost[] = await client.fetch(`*[_type == "post"]`)

	// TODO get image url from sanity

	if (data)
		return new Response(
			JSON.stringify({
				posts: data.map(convertBackendPostToPost)
			})
		)

	return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
		status: 500
	})
}
