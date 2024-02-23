import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { Private } from 'src/decorators/private.decorator';
import { DUser } from 'src/decorators/user.decorator';
import day from 'src/utils/day';
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
      day(date).startOf('day').toDate(),
    );
  }
}
