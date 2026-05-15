import { listAnnouncements } from '$lib/server/content/announcements'
import { listPostPreviews } from '$lib/server/content/posts'
import { getBranches } from '$lib/server/content/site'

export async function load() {
	try {
		const [branches, postPreviews, announcements] = await Promise.all([
			getBranches(),
			listPostPreviews(),
			listAnnouncements()
		])

		return {
			postPreviews,
			branches,
			announcements
		}
	} catch (error) {
		console.error(error)
		throw error
	}
}
