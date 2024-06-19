import { Body, Controller, Post } from '@nestjs/common';
import { MembersService } from './members.service';
import { MemberDto } from './dto/members.dto';

@Controller('members')
export class MembersController {
  constructor(private membersService: MembersService) {}

  @Post('members')
  addMember(@Body() dto: MemberDto) {
    return this.membersService.addMember(dto);
  }
}
