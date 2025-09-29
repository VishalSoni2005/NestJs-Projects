import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    // const newUser = new this.userModel(createUserDto);
    // return newUser.save();
    return null;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
