import { listAnnouncements } from '$lib/server/content/announcements'
import { getPostsCountsByCategory, listPostPreviews } from '$lib/server/content/posts'
import { getBranches } from '$lib/server/content/site'
import { resolveCategoryParam } from '$lib/server/category-query'

export async function load({ url }) {
	try {
		const category = resolveCategoryParam(url)

		const [branches, postPreviews, categoryPostCounts, announcements] = await Promise.all([
			getBranches(),
			listPostPreviews({ category }),
			getPostsCountsByCategory(),
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
