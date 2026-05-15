import { redirect } from '@sveltejs/kit'
import { isCategory } from '$lib/common/categories'

/** Validates `?category=`; redirects to the same path with only that param removed when invalid. */
export function resolveCategoryParam(url: URL): Category | undefined {
	const raw = url.searchParams.get('category')
	if (!raw) return undefined
	if (isCategory(raw)) return raw

	const params = new URLSearchParams(url.searchParams)
	params.delete('category')
	const query = params.toString()
	throw redirect(307, query ? `${url.pathname}?${query}` : url.pathname)
}
