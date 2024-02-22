import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Partner } from '@prisma/client';
import { DPartner } from 'src/decorators/partner.decorator';
import { Private } from 'src/decorators/private.decorator';
import { AccommodationsRegisterDto } from './accommodations.dto';
import { AccommodationsService } from './accommodations.service';

@Controller('accommodations')
export class AccommodationsController {
  constructor(private readonly accommodationsService: AccommodationsService) {}

  @Post()
  @Private('partner')
  registerAccommodation(
    @DPartner() partner: Partner,
    @Body() dto: AccommodationsRegisterDto,
  ) {
    return this.accommodationsService.createAccommodation({
      ...dto,
      partnerId: partner.id,
    });
  }

  @Get()
  getAccommodations() {
    return this.accommodationsService.getAccommodations();
  }

  @Get(':accommodationId')
  getAccommodation(
    @Param('accommodationId', ParseIntPipe) accommodationId: number,
  ) {
    return this.accommodationsService.getAccommodation(accommodationId);
  }

  @Patch(':accommodationId')
  @Private('partner')
  updateAccommodation() {}
}
