import { Module } from '@nestjs/common';
import { WoredasController } from './woredas.controller';
import { WoredasService } from './woredas.service';

@Module({
  controllers: [WoredasController],
  providers: [WoredasService]
})
export class WoredasModule {}
