import { Injectable } from '@nestjs/common';
import { MemberDto } from './dto/members.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MembersService {
  constructor(private prismaService: PrismaService) {}

  async addMember(dto: MemberDto) {
    await this.prismaService.members.create({
      data: {
        memberID: dto.memberID,
        membershipID: dto.membershipID,
        firstName: dto.firstName,
        lastName: dto.lastName,
        address: dto.address,
        contactNumber: dto.contactNumber,
        user_Id: dto.user_Id,
        renewalDate: dto.renewalDate,
        memberSince: dto.memberSince,
        status: dto.status,
      },
    });
    return { success: true };
  }
}
