import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/db/prisma/prisma.service';

@Injectable()
export class AccommodationsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.AccommodationUncheckedCreateInput) {
    const accommodation = await this.prismaService.accommodation.create({
      data,
    });

    return accommodation;
  }

  findAll() {
    return `This action returns all accommodations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accommodation`;
  }

  update(id: number) {
    return `This action updates a #${id} accommodation`;
  }

  remove(id: number) {
    return `This action removes a #${id} accommodation`;
  }
}
