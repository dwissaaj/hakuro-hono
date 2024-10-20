import { Hono } from 'hono'
import dataService from './lib/prisma';


type Env = {
  MY_KV: KVNamespace,
  DB: D1Database
}
const app = new Hono< {Bindings: Env}>()
app.get('/', async (c) => {
  const prisma = (await dataService.fetch(c.env.DB))
  const users = await prisma.user.findMany()
  console.log('users',users)
  return c.json(users)
})
app.get('/all', async (c) => {
  const prisma = (await dataService.fetch(c.env.DB)).user.findMany()
  console.log('data',prisma)
  return c.json(prisma)
})
export default app

