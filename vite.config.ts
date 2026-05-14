import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'

const appScssPath = fileURLToPath(new URL('./src/lib/styles/app.scss', import.meta.url))

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				additionalData: (source: string, filename: string) => {
					if (filename.endsWith('/src/lib/styles/app.scss')) return source
					/* Prose file only needs CSS vars from main.css — skip @use app to avoid circular deps / odd chunk order when this file is imported as its own entry. */
					if (filename.endsWith('/src/lib/styles/markdown.scss')) return source
					return `@use "${appScssPath}" as *;\n${source}`
				}
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
})
