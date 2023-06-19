import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  //khi auth controller tạo ra thì authservice cũng được tạo ra
  constructor(private authService: AuthService) {}
  @Post('/register')
  register() {
    return 'auth register';
  }
  @Post('login')
  login() {
    return 'auth login';
  }
}
