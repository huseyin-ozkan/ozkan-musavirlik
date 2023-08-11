declare type Post = {
	id: string
	slug: string

	createdAt: Date
	updatedAt: Date

	title: string
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
