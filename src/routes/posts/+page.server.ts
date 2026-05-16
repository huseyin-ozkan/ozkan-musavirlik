import { listAnnouncements } from '$lib/server/content/announcements'
import { getPostListContent } from '$lib/server/content/posts'
import { getBranches } from '$lib/server/content/site'
import { resolveCategoryParam } from '$lib/server/category-query'

export async function load({ url }) {
	try {
		const category = resolveCategoryParam(url)

		const [{ postPreviews, categoryPostCounts }, branches, announcements] = await Promise.all([
			getPostListContent({ category }),
			getBranches(),
			listAnnouncements()
		])

		return {
			postPreviews,
			categoryPostCounts,
			branches,
			announcements
		}
	} catch (error) {
		console.error(error)
		throw error
	}
}
