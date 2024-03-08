import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({}), AuthModule],
  providers: [AuthService, ConfigService, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}
