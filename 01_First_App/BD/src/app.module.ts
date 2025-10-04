import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [PrismaService],
  imports: [PrismaModule, UserModule],
  exports: [PrismaService],
})
export class AppModule {}
