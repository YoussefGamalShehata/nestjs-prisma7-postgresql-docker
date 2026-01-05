import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient, Prisma } from '@/prisma/generated/client';

const adapter: PrismaPg = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const options: Prisma.PrismaClientOptions = {
    adapter: adapter,
    errorFormat: 'pretty',
};
const prisma = new PrismaClient(options);

export async function main() {
    // await prisma.user.create({ data: u })
}

main()