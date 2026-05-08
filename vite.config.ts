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
					return `@use "${appScssPath}" as *;\n${source}`
				}
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
})
