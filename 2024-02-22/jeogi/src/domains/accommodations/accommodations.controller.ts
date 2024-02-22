import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Partner } from '@prisma/client';
import { DPartner } from 'src/decorators/partner.decorator';
import { Private } from 'src/decorators/private.decorator';
import { AccommodationsCreateDto } from './accommodations.dto';
import { AccommodationsService } from './accommodations.service';

@Controller('accommodations')
export class AccommodationsController {
  constructor(private readonly accommodationsService: AccommodationsService) {}

  @Post()
  @Private('partner')
  create(@DPartner() partner: Partner, @Body() dto: AccommodationsCreateDto) {
    return this.accommodationsService.create({ ...dto, partnerId: partner.id });
  }

  @Get()
  findAll() {
    return this.accommodationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accommodationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.accommodationsService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accommodationsService.remove(+id);
  }
}
