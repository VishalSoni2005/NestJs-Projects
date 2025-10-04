import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin() {
    return { msg: 'I am Signin' };
  }
  signup() {
    return { msg: 'I am Signup' };
  }
}
