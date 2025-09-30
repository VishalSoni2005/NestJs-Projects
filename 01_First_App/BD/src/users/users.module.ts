import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

// import { Module } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { UsersController } from './users.controller';
// import { PrismaService } from '../prisma/prisma.service';
// import { PrismaModule } from 'src/prisma/prisma.module';

// @Module({
//   imports: [PrismaModule],
//   controllers: [UsersController],
//   providers: [UsersService, PrismaService],
// })
// export class UsersModule {}
