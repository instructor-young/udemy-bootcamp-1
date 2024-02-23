import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AccommodationType, Partner } from '@prisma/client';
import { DPartner } from 'src/decorators/partner.decorator';
import { Private } from 'src/decorators/private.decorator';
import {
  AccommodationsAddRoomDto,
  AccommodationsRegisterDto,
} from './accommodations.dto';
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
  getAccommodations(@Query('type') type?: AccommodationType) {
    return this.accommodationsService.getAccommodations(type);
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

  @Post(':accommodationId/images')
  @Private('partner')
  @UseInterceptors(FileInterceptor('file'))
  uploadAccommodationMainImage(
    @DPartner() partner: Partner,
    @Param('accommodationId', ParseIntPipe) accommodationId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.accommodationsService.addImageToAccommodation(
      partner,
      accommodationId,
      file,
    );
  }

  @Post(':accommodationId/rooms')
  @Private('partner')
  addRoom(
    @DPartner() partner: Partner,
    @Body() dto: AccommodationsAddRoomDto,
    @Param('accommodationId', ParseIntPipe) accommodationId: number,
  ) {
    return this.accommodationsService.addRoomToAccommodation(
      partner,
      accommodationId,
      dto,
    );
  }

  @Delete(':accommodationId/rooms/:roomId')
  @Private('partner')
  deleteRoom(
    @DPartner() partner: Partner,
    @Param('accommodationId', ParseIntPipe) accommodationId: number,
    @Param('roomId', ParseIntPipe) roomId: number,
  ) {
    return this.accommodationsService.deleteRoomFromAccommodation(
      partner,
      accommodationId,
      roomId,
    );
  }
}
