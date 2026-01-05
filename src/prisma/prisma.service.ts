import { PrismaPg } from '@prisma/adapter-pg';
import { Injectable, OnModuleDestroy } from '@nestjs/common';

import { PrismaClient, Prisma } from '@/prisma/generated/client';

@Injectable()
export class PrismaService implements OnModuleDestroy {
  public readonly client: PrismaClient;

  constructor() {
    const adapter: PrismaPg = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
    const options: Prisma.PrismaClientOptions = {
      adapter: adapter,
      errorFormat: 'pretty',
    };
    this.client = new PrismaClient(options);
  }

  async onModuleDestroy(): Promise<void> {
    await this.client.$disconnect();
  }
}
