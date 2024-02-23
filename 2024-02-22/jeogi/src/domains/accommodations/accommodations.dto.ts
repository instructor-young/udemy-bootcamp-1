import { AccommodationType, Prisma } from '@prisma/client';

export type AccommodationsRegisterDto = {
  type: AccommodationType;
  name: string;
  address1: string;
  address2: string;
  latitude: number;
  longitude: number;
  description?: string;
  imgUrl?: string;
};

export type AccommodationsAddRoomDto =
  Prisma.RoomCreateWithoutAccommodationInput;
