import { PrismaPostgresAdapterConfig, PrismaPostgresAdapter } from '@prisma/adapter-ppg'

import { PrismaClient, Prisma } from './generated/client.js';

const connectionString = `${process.env.DATABASE_URL}`
const config: PrismaPostgresAdapterConfig = {
    connectionString: connectionString,
};
const adapter = new PrismaPostgresAdapter(config);
const options: Prisma.PrismaClientOptions = {
    adapter: adapter,
    errorFormat: 'pretty',
};
const prisma = new PrismaClient(options);

export async function main() {
    // await prisma.user.create({ data: u })
}

main()
