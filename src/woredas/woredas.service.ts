import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { WoredasDto } from './dto/woredas.dto';

@Injectable()
export class WoredasService {
  constructor(private prismaService: PrismaService) {}

  async addWoreda(dto: WoredasDto) {
    const woreda = await this.prismaService.woredas.create({
      dat: {
        ...dto,
      },
    });
  }
}
