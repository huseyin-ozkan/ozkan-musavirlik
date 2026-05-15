export interface CategoryTitle {
	title: string
	id: Category
}

export const categoryTitles: CategoryTitle[] = [
	{ title: 'Muhasebe', id: 'accountancy' },
	{ title: 'Gayrimenkul Değerleme', id: 'real-estate' },
	{ title: 'Girişimci Destekleri', id: 'entrepreneurs' }
]

export const findCategoryTitle = (c: Category): CategoryTitle | null =>
	categoryTitles.find((ct) => ct.id === c) ?? null

export type CategoryPostCount = {
	id: Category
	count: number
}

const categoryIds = new Set(categoryTitles.map((c) => c.id))

export function isCategory(value: string): value is Category {
	return categoryIds.has(value as Category)
}
