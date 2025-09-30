import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }
}

// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   InternalServerErrorException,
//   Param,
// } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';

// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @Post('/adduser')
//   async create(@Body() createUserDto: CreateUserDto) {
//     try {
//       console.log(createUserDto.name, 'and', createUserDto.email);
//       return this.usersService.create(createUserDto);
//     } catch (error) {
//       console.log(error);
//       throw new InternalServerErrorException('Error Creating User');
//     }
//   }

//   @Get()
//   async findAll() {
//     try {
//       return this.usersService.findAll();
//     } catch (error) {
//       console.log(error);
//       throw new InternalServerErrorException('Error finding Users');
//     }
//   }

//   @Get(':id')
//   async findOne(@Param('id') id: string) {
//     try {
//       return this.usersService.findOne(id);
//     } catch (error) {
//       console.log(error);
//       throw new InternalServerErrorException('Error finding User');
//     }
//   }
// }
