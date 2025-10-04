// the module file is class anotated with @module decorator

import { Module } from '@nestjs/common';
import { AuthControllers } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AuthService],
  controllers: [AuthControllers],
  exports: [],
})
export class AuthModule {}
