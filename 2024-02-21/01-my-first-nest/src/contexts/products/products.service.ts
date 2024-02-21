import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getProducts() {
    const products = await this.prismaService.product.findMany({
      include: { brand: true },
    });

    return products;
  }

  async getProduct(productId: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id: productId },
      include: { brand: true },
    });

    return product;
  }
}
