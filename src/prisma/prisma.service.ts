import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async enableShutdownHooks(): Promise<void> {
    this.$on('beforeExit', async () => {
      await this.$disconnect();
    });
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
