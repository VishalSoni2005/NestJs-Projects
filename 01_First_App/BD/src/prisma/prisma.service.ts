import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit' as Prisma.PrismaClientEvent, async () => {
      await app.close();
    });
  }
}
