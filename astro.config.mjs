import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts'
import { siteConfig } from './src/data/site.config'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
	vite: {
		resolve: {
			alias: {
				'@/assets': path.resolve(__dirname, 'src/assets')
			}
		}
	},
	site: siteConfig.site,
	markdown: {
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
			themes: { light: 'github-light', dark: 'github-dark' },
			wrap: true
		}
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				themes: { light: 'github-light', dark: 'github-dark' },
				wrap: true
			},
			drafts: true
		}),
		sitemap(),
		tailwind()
	]
})
