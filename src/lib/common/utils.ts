import { marked } from 'marked'

/** Return plain text content from Markdown (e.g. post card teaser from a body slice). */
export function plainTextFromMarkdownSlice(markdown: string): string {
	const html = marked.parse(markdown.trim()) as string
	return html
		.replace(/<[^>]*>?/gm, '')
		.replace(/\s+/g, ' ')
		.trim()
}
