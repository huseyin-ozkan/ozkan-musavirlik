import { marked } from 'marked'
import { categoryTitles } from '$lib/common/categories'
import { plainTextFromMarkdownSlice } from '$lib/common/utils'
import { sanityClient } from '$lib/server/sanity/client'
import type { PostDetailRow, PostListContent, PostListContentRow } from './types'

/** Optional `$category`: all posts when null, otherwise match `category`. */
const postsFilterQuery = `// groq
*[_type == "post" && (!defined($category) || category == $category)]`

const teaserBodyCharLimit = 400
const teaserBodySliceQuery = `// groq 
			array::join(string::split(body, "")[0..${teaserBodyCharLimit - 1}], "")`
const postPreviewProjectionQuery = `// groq
		{  
			"id": _id,
			"slug": slug.current,
			"createdAt": _createdAt,
			"updatedAt": _updatedAt,
			title,
			category,
			"summary": coalesce(select(defined(summary) && length(summary) > 0 => summary, null), ${teaserBodySliceQuery})
		}`

const categoryCountsGroq = `{
			${categoryTitles.map(({ id }) => `  "${id}": count(*[_type == "post" && category == "${id}"])`).join(',\n')}
		}`

const categoryParam = (category?: Category) => category ?? null

export async function getPostListContent(options?: {
	limit?: number
	category?: Category
}): Promise<PostListContent> {
	const { limit, category } = options ?? {}

	const limitSlice =
		limit != null && Number.isFinite(limit) && limit > 0
			? `[0..${Math.min(100, Math.floor(limit)) - 1}]`
			: ''

	const res = await sanityClient.fetch<PostListContentRow>(
		`{
			"previews": ${postsFilterQuery} | order(_createdAt desc)${limitSlice} ${postPreviewProjectionQuery},
			"postCount": count(${postsFilterQuery}),
			"categoryCounts": ${categoryCountsGroq}
		}`,
		{ category: categoryParam(category) }
	)

	const postPreviews = res.previews.map((row) => ({
		id: row.id,
		slug: row.slug,
		createdAt: row.createdAt,
		updatedAt: row.updatedAt,
		title: row.title,
		category: row.category,
		summary: plainTextFromMarkdownSlice(row.summary)
	}))

	const categoryPostCounts = categoryTitles.map(({ id }) => ({
		id,
		count: res.categoryCounts[id] ?? 0
	}))

	return {
		postPreviews,
		postCount: res.postCount,
		categoryPostCounts
	}
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
	const row = await sanityClient.fetch<PostDetailRow | null>(
		`// groq 
		*[_type == "post" && slug.current == $slug][0]{
			"id": _id,
			"slug": slug.current,
			"createdAt": _createdAt,
			"updatedAt": _updatedAt,
			title,
			summary,
			category,
			body,
			"mainImage": mainImage.asset->url
		}`,
		{ slug }
	)
	if (!row?.body) return null

	return {
		id: row.id,
		slug: row.slug,
		createdAt: row.createdAt,
		updatedAt: row.updatedAt,
		category: row.category,
		title: row.title,
		summary: row.summary ?? undefined,
		body: marked.parse(row.body),
		mainImage: row.mainImage ?? undefined
	}
}
