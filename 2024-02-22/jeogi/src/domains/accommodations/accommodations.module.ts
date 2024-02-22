import { Module } from '@nestjs/common';
import { AccommodationsService } from './accommodations.service';
import { AccommodationsController } from './accommodations.controller';
import { RegionsModule } from './regions/regions.module';

@Module({
  controllers: [AccommodationsController],
  providers: [AccommodationsService],
  imports: [RegionsModule],
})
export class AccommodationsModule {}
