import { AccommodationType } from '@prisma/client';

export type AccommodationsCreateDto = {
  type: AccommodationType;
  name: string;
  address1: string;
  address2: string;
  latitude: number;
  longitude: number;
  description?: string;
  imgUrl?: string;
};
