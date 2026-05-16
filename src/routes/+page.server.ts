import { listAnnouncements } from '$lib/server/content/announcements'
import { getPostListContent } from '$lib/server/content/posts'
import { getHomeContent } from '$lib/server/content/site'
import { resolveCategoryParam } from '$lib/server/category-query'

export async function load({ url }) {
	try {
		const category = resolveCategoryParam(url)

		const [home, postList, announcements] = await Promise.all([
			getHomeContent(),
			getPostListContent({ limit: 4, category }),
			listAnnouncements()
		])

		return {
			hero: home.hero,
			about: home.about,
			staff: home.staff,
			branches: home.branches,
			postPreviews: postList.postPreviews,
			postCount: postList.postCount,
			categoryPostCounts: postList.categoryPostCounts,
			announcements
		}
	} catch (error) {
		console.error(error)
		throw error
	}
}
