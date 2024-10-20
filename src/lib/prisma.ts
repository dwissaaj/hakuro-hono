import { PrismaClient } from '@prisma/client'
import { PrismaD1 } from '@prisma/adapter-d1'


export interface Env {
  DB: D1Database
}
const dataService = {
  async fetch(env: Env) {
    const adapter = new PrismaD1(env.DB);
    const prisma = new PrismaClient({ adapter });

    const users = await prisma.user.findMany();
    const result = JSON.stringify(users);
    
    console.log('resu', result);
    console.log('pris', prisma);
    return prisma; // Return the Prisma client as before
  },
};

// Export dataService as default export
export default dataService;