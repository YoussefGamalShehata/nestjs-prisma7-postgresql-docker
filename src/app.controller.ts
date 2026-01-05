import { Get } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';

type HealthStatus = { status: 'ok' };
type HealthError = { status: 'error'; error: string };
type HealthResponse = HealthStatus | HealthError;

export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('/health')
  getHealth(): HealthStatus {
    return { status: 'ok' };
  }

  @Get('/health/database')
  async getDbHealth(): Promise<HealthResponse> {
    try {
      await this.prisma.client.user.count();
      return { status: 'ok' };
    } catch (error: unknown) {
      let message = 'DB error';
      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === 'string') {
        message = error;
      }
      return { status: 'error', error: message };
    }
  }
}
