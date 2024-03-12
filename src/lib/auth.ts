import { Lucia } from "lucia"

import { Sessions, Users, db } from "astro:db"
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle"
import { GitHub } from "arctic"

const adapter = new DrizzleSQLiteAdapter(db, Sessions, Users)

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: import.meta.env.PROD,
		},
	},
})

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia
	}
}

export const github = new GitHub(import.meta.env.GITHUB_CLIENT_ID, import.meta.env.GITHUB_CLIENT_SECRET)
