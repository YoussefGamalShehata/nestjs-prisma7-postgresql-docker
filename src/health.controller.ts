import { Controller, Get } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service.js';

type HealthStatus = { status: 'ok' };
type HealthError = { status: 'error'; error: string };
type HealthResponse = HealthStatus | HealthError;

@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('')
  getHealth(): HealthStatus {
    return { status: 'ok' };
  }

  @Get('db')
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
