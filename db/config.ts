import { column, defineDb, defineTable } from "astro:db"

const Users = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		username: column.text(),
	},
})
const Sessions = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		userId: column.text({ references: () => Users.columns.id }),
		expiresAt: column.number(),
	},
})

// https://astro.build/db/config
export default defineDb({
	tables: { Users, Sessions },
})
