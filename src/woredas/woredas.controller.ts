import { Body, Controller, Post } from '@nestjs/common';
import { WoredasService } from './woredas.service';
import { WoredasDto } from './dto/woredas.dto';

@Controller('woredas')
export class WoredasController {
  constructor(private woredaService: WoredasService) {}

  @Post('add')
  async addWoreda(@Body() woreda: WoredasDto) {
    return this.woredaService.addWoreda(woreda);
  }
}
