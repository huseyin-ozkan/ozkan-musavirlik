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
