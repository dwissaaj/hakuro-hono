import { PrismaClient } from '@prisma/client'
import { PrismaD1 } from '@prisma/adapter-d1'

export interface Env {
  DB: D1Database
}

export default {
  async fetch(

    env: Env,
   
  ) {
    const adapter = new PrismaD1(env.DB)
    const prisma = new PrismaClient({ adapter })

    
    return prisma
  },
}