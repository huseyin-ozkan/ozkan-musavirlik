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
