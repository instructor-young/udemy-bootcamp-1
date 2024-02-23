import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import * as dayjs from 'dayjs';
import { Private } from 'src/decorators/private.decorator';
import { DUser } from 'src/decorators/user.decorator';
import { RoomsService } from './rooms.service';

@Controller('/accommodations/:accommodationId/rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post('/:roomId/reservations')
  @Private('user')
  makeReservation(
    @DUser() user: User,
    @Param('roomId', ParseIntPipe) roomId: number,
    @Body('date') date: string,
  ) {
    return this.roomsService.makeReservation(
      user.id,
      roomId,
      dayjs(date).toDate(),
    );
  }
}
