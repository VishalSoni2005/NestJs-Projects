/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { User } from '@prisma/client'; // ✅ correct import
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/library';

interface SignUpResponse {
  id: string;
  email: string;
  name: string | null;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async signup(dto: AuthDto) {
    try {
      // console.log('DTO in service:', dto);

      // 1. Hash the password
      const hash = await argon.hash(dto.password);
      // console.log('Hashed password:', hash);

      // 2. Save the new user in the database
      const newUser = await this.prisma.user.create({
        data: {
          email: dto.email,
          firstName: dto.name,
          hash: hash,
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      console.log('Created user:', newUser);
      // newUser.password = undefined;

      return newUser;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new Error('Email already exists');
        }
      }
      console.log('Error in signup service:', error);
      throw error; // Re-throw the error after logging it
    }
  }

  async signin(dto: AuthDto) {
    try {
      // steo 1: find user by email
      const existingUser = await this.prisma.user.findFirst({
        where: { email: dto.email },
      });
      if (!existingUser) {
        throw new Error('User not found');
      }

      // step 2: compare password, if not match throw exception
      const pwMatches = await argon.verify(existingUser.hash, dto.password);
      // step 3: if password match, send back user

      if (!pwMatches) {
        throw new Error('Invalid password');
      }
      console.log('Signed in user:', existingUser);
      // existingUser.password = undefined;
      return existingUser;
    } catch (error) {
      console.log('Error in signin service:', error);
      throw error;
    }
    return { msg: 'I am Signin' };
  }
}
