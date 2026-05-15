import { listAnnouncements } from '$lib/server/content/announcements'
import {
	getPostsCount,
	getPostsCountsByCategory,
	listPostPreviews
} from '$lib/server/content/posts'
import { getAbout, getBranches, getHero, getStaff } from '$lib/server/content/site'
import { resolveCategoryParam } from '$lib/server/category-query'

export async function load({ url }) {
	try {
		const category = resolveCategoryParam(url)

		const [
			hero,
			about,
			staff,
			branches,
			postPreviews,
			postCount,
			categoryPostCounts,
			announcements
		] = await Promise.all([
			getHero(),
			getAbout(),
			getStaff(),
			getBranches(),
			listPostPreviews({ limit: 4, category }),
			getPostsCount({ category }),
			getPostsCountsByCategory(),
			listAnnouncements()
		])

		return {
			hero,
			about,
			staff,
			branches,
			postPreviews,
			postCount,
			categoryPostCounts,
			announcements
		}
	} catch (error) {
		console.error(error)
		throw error
	}
}
