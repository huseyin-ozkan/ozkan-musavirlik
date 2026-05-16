export interface Route {
	path: string
	title: string
	isPrimary?: boolean
}

export const ROUTES: Record<string, Route> = {
	posts: {
		path: '/posts',
		title: 'Blog'
	},
	about: {
		path: '/#about',
		title: 'Hakkımızda'
	},
	contact: {
		path: '/#contact',
		title: 'İletişim',
		isPrimary: true
	}
}

export const NAV_ROUTES = Object.values(ROUTES)
