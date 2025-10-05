/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('users')
export class UserController {
  constructor(private prisma: PrismaService) {}

  @Get('/getAllUsers')
  async findAll() {
    const users = await this.prisma.user.findMany();

    return users;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getMe() {
    return { msg: 'This is a protected route' };
  }
}
