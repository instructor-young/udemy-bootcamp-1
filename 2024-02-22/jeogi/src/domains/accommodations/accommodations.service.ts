import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/db/prisma/prisma.service';

@Injectable()
export class AccommodationsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createAccommodation(data: Prisma.AccommodationUncheckedCreateInput) {
    const accommodation = await this.prismaService.accommodation.create({
      data,
    });

    return accommodation;
  }

  async getAccommodations() {
    const accommodations = await this.prismaService.accommodation.findMany();

    return accommodations;
  }

  async getAccommodation(accommodationId: number) {
    const accommodations = await this.prismaService.accommodation.findUnique({
      where: { id: accommodationId },
    });

    return accommodations;
  }
}
