declare type Post = {
	id: string
	slug: string

	createdAt: string
	updatedAt: string

	title: string
	summary?: string
	/** HTML */
	body: string
	mainImage?: string
}

declare type SanityPost = {
	_id: string
	_rev: string
	_type: 'post'
	_createdAt: string
	_updatedAt: string

	title: string
	slug: {
		current: string
		_type: 'slug'
	}
	summary?: string
	/** Markdown */
	body: string

	mainImage?: {
		_type: 'image'
		asset: {
			_ref: string
			_type: 'reference'
		}
	}
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
