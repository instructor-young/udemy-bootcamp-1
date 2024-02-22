import { Controller, Get } from '@nestjs/common';
import { RegionsService } from './regions.service';

@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @Get()
  getRegions() {
    return this.regionsService.getRegions();
  }
}
