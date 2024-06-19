import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DtoSignin, UserDto } from './dto';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private config: ConfigService,
    private jwt: JwtService,
  ) {}
  async signupUser(dto: UserDto): Promise<any> {
    const email = await this.prismaService.users.findUnique({
      where: {
        email: dto.email,
        userId: dto.userId,
      },
    });
    if (email) {
      throw new ForbiddenException(`User ${dto.email} already exists`);
    }
    const hash = await argon.hash(dto.password);
    const user = await this.prismaService.users.create({
      data: {
        userId: dto.userId,
        email: dto.email,
        role: dto.role,
        username: dto.username,
        password: hash,
      },
    });
    if (!user) {
      throw new ForbiddenException('sign up failed');
    }
    return user;
  }
  async getUser() {
    return await this.prismaService.users.findMany({
      select: {
        userId: true,
        username: true,
        role: true,
        email: true,
      },
    });
  }
  async signinIn(dto: DtoSignin): Promise<any> {
    const user = await this.prismaService.users.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('email not found');
    } else {
      const pwMatches = await argon.verify(user.password, dto.password);
      if (!pwMatches) {
        throw new ForbiddenException('Incorrect password');
      }
      // const token = await this.signToken(user.id, user.role);
      return this.signToken(user.userId, user.role, user.email);
    }
  }

  async signToken(
    userId: string,
    role: string,
    email: string,
  ): Promise<{ token_access: string }> {
    const payload = {
      sub: userId,
      role,
      email,
    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      secret: secret,
      expiresIn: '30m',
    });
    return { token_access: token };
  }
}
