import { BASE_URL } from '$lib/constants'

export function getAbsoluteUrl(path: string): string {
	if (path.startsWith('http://') || path.startsWith('https://')) {
		return path
	}
	const cleanPath = path.startsWith('/') ? path : `/${path}`
	return `${BASE_URL}${cleanPath}`
}

export function formatISODate(date: string | Date): string {
	const dateObj = typeof date === 'string' ? new Date(date) : date
	return dateObj.toISOString()
}
