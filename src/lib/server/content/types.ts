import type { CategoryPostCount } from '$lib/common/categories'

export type HomeContent = {
	hero: Content.Hero
	about: Content.About
	staff: Content.Staff[]
	branches: Content.Branch[]
}

/** Raw list row from Sanity before teaser plain-text mapping. */
export type PostListRow = {
	id: string
	slug: string
	createdAt: string
	updatedAt: string
	title: string
	category?: Category
	summary: string
}

export type PostListContentRow = {
	previews: PostListRow[]
	postCount: number
	categoryCounts: Record<Category, number>
}

export type PostListContent = {
	postPreviews: PostPreview[]
	postCount: number
	categoryPostCounts: CategoryPostCount[]
}

export type PostDetailRow = {
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
