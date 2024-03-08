import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signupUser(dto: UserDto) {
    return this.authService.signupUser(dto);
  }

  @Post('signin')
  signinIn(dto: UserDto) {
    return this.authService.signinIn(dto);
  }
}
