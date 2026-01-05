import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService implements OnModuleDestroy {
  public readonly client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  async onModuleDestroy(): Promise<void> {
    await this.client.$disconnect();
  }
}
