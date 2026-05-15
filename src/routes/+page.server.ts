import { listAnnouncements } from '$lib/server/content/announcements'
import { countPosts, listPostPreviews } from '$lib/server/content/posts'
import { getAbout, getBranches, getHero, getStaff } from '$lib/server/content/site'

export async function load() {
	try {
		const [hero, about, staff, branches, postPreviews, postCount, announcements] =
			await Promise.all([
				getHero(),
				getAbout(),
				getStaff(),
				getBranches(),
				listPostPreviews({ limit: 4 }),
				countPosts(),
				listAnnouncements()
			])

		return {
			hero,
			about,
			staff,
			branches,
			postPreviews,
			postCount,
			announcements
		}
	} catch (error) {
		console.error(error)
		throw error
	}
}
