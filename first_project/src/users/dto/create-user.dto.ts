import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'nane required string' })
  name: string;

  @IsEmail()
  email: string;
}
