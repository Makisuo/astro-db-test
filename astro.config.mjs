import db from "@astrojs/db"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"

import cloudflare from "@astrojs/cloudflare"

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [mdx(), sitemap(), db()],
	output: "server",
	adapter: cloudflare(),
	vite: {
		optimizeDeps: {
			exclude: ["oslo"],
		},
	},
})
