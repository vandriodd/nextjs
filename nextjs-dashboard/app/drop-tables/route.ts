import { db } from '@vercel/postgres'

const client = await db.connect()

export async function GET() {
  try {
    await client.sql`BEGIN`
    await client.sql`DROP TABLE IF EXISTS users, invoices, customers, revenue`
    await client.sql`COMMIT`

    return Response.json({ message: 'Tables dropped successfully' })
  } catch (error) {
    await client.sql`ROLLBACK`
    return Response.json({ error }, { status: 500 })
  }
}
