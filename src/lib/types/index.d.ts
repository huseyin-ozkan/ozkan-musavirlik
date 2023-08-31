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
