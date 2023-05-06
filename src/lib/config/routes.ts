export interface Route {
	path: string
	title: string
}

export const ROUTES: Record<string, Route> = {
	home: {
		path: '/',
		title: 'Ana Sayfa'
	},
	blog: {
		path: '/#blog',
		title: 'Yazılar'
	},
	about: {
		path: '/#about',
		title: 'Hakkımızda'
	},
	contact: {
		path: '/#contact',
		title: 'İletişim'
	}
}

export const NAV_ROUTES = Object.values(ROUTES)
