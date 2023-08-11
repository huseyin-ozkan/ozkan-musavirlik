import { createClient } from '@sanity/client'

export const client = createClient({
	projectId: 'mak6gl1u',
	dataset: 'production',
	apiVersion: '2023-07-11',
	useCdn: false
})
