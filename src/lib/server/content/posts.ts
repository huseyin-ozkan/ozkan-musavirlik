import { marked } from 'marked'
import { plainTextFromMarkdownSlice } from '$lib/common/utils'
import { sanityClient } from '$lib/server/sanity/client'

/** List GROQ: non-empty CMS `summary`, else first 400 chars of `body` (split/slice/join; string range slices are null here). */
const BODY_PREVIEW = `array::join(string::split(body, "")[0..399], "")`

const LIST_PROJECTION = `{
  "id": _id,
  "slug": slug.current,
  "createdAt": _createdAt,
  "updatedAt": _updatedAt,
  title,
  category,
  "summary": coalesce(select(defined(summary) && length(summary) > 0 => summary, null), ${BODY_PREVIEW})
}`

type PostListRow = {
	id: string
	slug: string
	createdAt: string
	updatedAt: string
	title: string
	category?: Category
	/** Raw teaser from GROQ (CMS text or markdown slice). */
	summary: string
}

const DETAIL_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  "id": _id,
  "slug": slug.current,
  "createdAt": _createdAt,
  "updatedAt": _updatedAt,
  title,
  summary,
  category,
  body,
  "mainImage": mainImage.asset->url
}`

type PostDetailRow = {
	id: string
	slug: string
	createdAt: string
	updatedAt: string
	title: string
	summary?: string | null
	category?: Category
	body: string
	mainImage?: string | null
}

export async function countPosts(): Promise<number> {
	return sanityClient.fetch<number>('count(*[_type == "post"])')
}

export async function listPostPreviews(options?: { limit?: number }): Promise<PostPreview[]> {
	const limit = options?.limit
	const slice =
		limit != null && Number.isFinite(limit) && limit > 0
			? `[0..${Math.min(100, Math.floor(limit)) - 1}]`
			: ''

	const query = `*[_type == "post"] | order(_createdAt desc)${slice} ${LIST_PROJECTION}`
	const rows = await sanityClient.fetch<PostListRow[]>(query)

	return rows.map((row) => ({
		id: row.id,
		slug: row.slug,
		createdAt: row.createdAt,
		updatedAt: row.updatedAt,
		title: row.title,
		category: row.category,
		summary: plainTextFromMarkdownSlice(row.summary)
	}))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
	const row = await sanityClient.fetch<PostDetailRow | null>(DETAIL_QUERY, { slug })
	if (!row || row.body == null || row.body === '') return null

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
