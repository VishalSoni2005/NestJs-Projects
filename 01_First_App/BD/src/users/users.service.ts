import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.prisma.user.update({
      where: { id },
      data,
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}

// import {
//   Injectable,
//   InternalServerErrorException,
//   NotFoundException,
//   BadRequestException,
// } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { PrismaService } from 'src/prisma/prisma.service';

// @Injectable()
// export class UsersService {
//   constructor(private prisma: PrismaService) {}

//   async create(createUserDto: CreateUserDto) {
//     try {
//       return await this.prisma.user.create({
//         data: createUserDto,
//       });
//     } catch (error) {
//       console.error('Error creating user:', error);
//       throw new InternalServerErrorException('Error creating user');
//     }
//   }

//   async findAll() {
//     try {
//       return await this.prisma.user.findMany();
//     } catch (error) {
//       console.error('Error finding all users:', error);
//       throw new InternalServerErrorException('Error finding all users');
//     }
//   }

//   async findOne(id: string) {
//     // ✅ Validate ObjectID format before calling Prisma
//     if (!/^[0-9a-fA-F]{24}$/.test(id)) {
//       throw new BadRequestException('Invalid user ID format');
//     }

//     try {
//       const user = await this.prisma.user.findUnique({
//         where: { id },
//       });

//       if (!user) {
//         throw new NotFoundException(`User with ID ${id} not found`);
//       }

//       return user;
//     } catch (error) {
//       console.error('Error finding user:', error);
//       throw new InternalServerErrorException('Error finding user');
//     }
//   }
// }

// // async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
// //   try {
// //     const updatedUser = await this.userModel
// //       .findByIdAndUpdate(id, updateUserDto, {
// //         new: true,
// //         runValidators: true,
// //       })
// //       .exec();

// //     if (!updatedUser) {
// //       throw new NotFoundException(`User with ID ${id} not found`);
// //     }

// //     return updatedUser;
// //   } catch (error) {
// //     console.error('Error updating user:', error);

// //     if (error instanceof NotFoundException) {
// //       throw error;
// //     }

// //     if (error.name === 'CastError') {
// //       throw new BadRequestException('Invalid user ID format');
// //     }

// //     if (error.code === 11000) {
// //       throw new BadRequestException('User with this email already exists');
// //     }

// //     if (error.name === 'ValidationError') {
// //       throw new BadRequestException(error.message);
// //     }

// //     throw new InternalServerErrorException('Error updating user');
// //   }
// // }

// // async deleteUser(id: string): Promise<void> {
// //   try {
// //     const result = await this.userModel.findByIdAndDelete(id).exec();
// //     if (!result) {
// //       throw new NotFoundException(`User with ID ${id} not found`);
// //     }
// //   } catch (error) {
// //     console.error('Error deleting user:', error);

// //     if (error instanceof NotFoundException) {
// //       throw error;
// //     }

// //     if (error.name === 'CastError') {
// //       throw new BadRequestException('Invalid user ID format');
// //     }

// //     throw new InternalServerErrorException('Error deleting user');
// //   }
// // }
