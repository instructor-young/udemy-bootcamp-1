import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma/prisma.service';

@Injectable()
export class BrandsService {
  constructor(private readonly prismaService: PrismaService) {}

  getBrands() {
    return this.prismaService.brand.findMany();
  }

  getBrand(brandId: number) {
    return this.prismaService.brand.findUnique({ where: { id: brandId } });
  }
}
