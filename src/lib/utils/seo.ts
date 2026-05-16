import { DEFAULT_OG_IMAGE } from '$lib/constants'
import { getAbsoluteUrl } from '$lib/utils'

export function buildPostImageJsonLd(post: Pick<Post, 'title' | 'mainImage'>) {
	const imageUrl = post.mainImage
		? getAbsoluteUrl(post.mainImage)
		: getAbsoluteUrl(DEFAULT_OG_IMAGE)

	return {
		'@type': 'ImageObject',
		url: imageUrl,
		caption: post.title,
		...(post.mainImage ? {} : { width: 1200, height: 630 })
	}
}

export function postDescription(post: Post, maxLength = 160): string {
	if (post.summary?.trim()) return post.summary.trim()

	const plain = post.body
		.replace(/<[^>]*>/g, '')
		.replace(/\s+/g, ' ')
		.trim()

	if (plain.length <= maxLength) return plain
	return `${plain.slice(0, maxLength - 1).trimEnd()}…`
}
