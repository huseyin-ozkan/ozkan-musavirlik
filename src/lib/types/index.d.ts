declare type Category = 'accountancy' | 'real-estate' | 'entrepreneurs'

/** Card / list row: plain teaser only (no HTML body). */
declare type PostPreview = {
	id: string
	slug: string
	createdAt: string
	updatedAt: string
	title: string
	category?: Category
	summary: string
}

declare type Post = {
	id: string
	slug: string

	createdAt: string
	updatedAt: string

	category?: Category
	title: string
	summary?: string
	/** HTML */
	body: string
	mainImage?: string
}

declare type Announcement = {
	id: string
	createdAt: string
	updatedAt: string

	category?: Category
	title: string
	body: string
}

declare namespace Content {
	export type Hero = {
		heading: string
		subheading: string
		services: {
			accountancy: string
			realEstateAppraisal: string
			incentiveConsultancy: string
		}
	}

	export type About = {
		paragraph: string
		mission: string
		vision: string
	}

	export type Staff = {
		name: string
		title: string
		image: string
		description: string
	}

	export type Branch = {
		name: string
		address: string
		mapLink?: string
		phones: string[]
		email: string
	}
}

declare module 'swiper'
