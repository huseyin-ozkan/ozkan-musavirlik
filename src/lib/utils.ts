import { marked } from 'marked'

export const convertBackendPostToPost = (post: SanityPost): Post => ({
	id: post._id,
	slug: post.slug.current,
	createdAt: new Date(post._createdAt),
	updatedAt: new Date(post._updatedAt),
	title: post.title,
	summary: post.summary,
	body: marked.parse(post.body), // convert markdown to html
	mainImage: post?.mainImage?.asset?._ref
})
