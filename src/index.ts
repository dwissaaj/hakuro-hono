import { Hono } from 'hono'
import { Prisma, PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { env } from 'hono/adapter';
import book from './blog/book'


type Bindings = {
  MY_KV: KVNamespace,
  Env: D1Database
}
const app = new Hono< {Bindings: Bindings}>()
app.get('/', async (c) => {
  return c.text('asdas')
})


export default app

