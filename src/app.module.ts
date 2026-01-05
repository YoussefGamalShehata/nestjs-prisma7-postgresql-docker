import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { HealthController } from './health.controller';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [HealthController],
})
export class AppModule {}
