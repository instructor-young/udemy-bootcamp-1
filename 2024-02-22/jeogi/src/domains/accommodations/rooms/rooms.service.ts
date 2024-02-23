import { Injectable } from '@nestjs/common';
import { Accommodation, Prisma, Reservation, Room } from '@prisma/client';
import { PrismaService } from 'src/db/prisma/prisma.service';

@Injectable()
export class RoomsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createRoom(
    accommodationId: Accommodation['id'],
    dataWithoutAccommodationId: Prisma.RoomCreateWithoutAccommodationInput,
  ) {
    const data: Prisma.RoomUncheckedCreateInput = {
      accommodationId,
      ...dataWithoutAccommodationId,
    };
    const room = await this.prismaService.room.create({ data });

    return room;
  }

  async deleteRoom(roomId: Room['id']) {
    const room = await this.prismaService.room.delete({
      where: { id: roomId },
    });

    return room;
  }

  async makeReservation(
    reservedById: Reservation['reservedById'],
    roomId: Reservation['roomId'],
    date: Reservation['date'],
  ) {
    const reservation = await this.prismaService.reservation.update({
      where: { roomId_date: { roomId, date } },
      data: { reservedAt: new Date(), reservedById },
    });

    return reservation;
  }
}
