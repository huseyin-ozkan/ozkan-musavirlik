import { error } from '@sveltejs/kit'
import { getPostBySlug } from '$lib/server/content/posts'

export async function load({ params }) {
	const post = await getPostBySlug(params.slug)
	if (!post) error(404, 'Post not found')
	return { post }
}
