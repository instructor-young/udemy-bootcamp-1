import { Module } from '@nestjs/common';
import { AccommodationsService } from './accommodations.service';
import { AccommodationsController } from './accommodations.controller';

@Module({
  controllers: [AccommodationsController],
  providers: [AccommodationsService],
})
export class AccommodationsModule {}
