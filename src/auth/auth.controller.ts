import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto, DtoSignin } from './dto';
import { JwtGuard } from './guard';
import { RoleGuard } from './decorator/roles.guard';
import { Role } from './decorator/enums/role.enum';
import { Roles } from './decorator/roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signupUser(@Body() dto: UserDto) {
    return this.authService.signupUser(dto);
  }

  @Post('signin')
  signinIn(@Body() dto: DtoSignin) {
    return this.authService.signinIn(dto);
  }
  @UseGuards(JwtGuard, RoleGuard)
  @Roles(Role.ADMIN, Role.USER)
  @Get('get')
  getUser() {
    return this.authService.getUser();
  }
}
