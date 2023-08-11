import { client } from '$lib/config/sanity'
import { convertBackendPostToPost } from '$lib/utils'

export async function GET({ params }) {
	const { slug } = params

	const data: SanityPost[] = await client.fetch(`*[_type == "post" && slug.current == "${slug}"]`)

	// TODO get image url from sanity

	const post: Post = convertBackendPostToPost(data[0])

	return new Response(
		JSON.stringify({
			data: {
				post
			}
		})
	)
}
