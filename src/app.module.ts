import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';
import { MembersModule } from './members/members.module';
import { WoredasModule } from './woredas/woredas.module';
@Module({
  imports: [
    AuthModule,
    PrismaModule,
    SharedModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MembersModule,
    WoredasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
