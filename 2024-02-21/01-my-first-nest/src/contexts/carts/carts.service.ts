import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma/prisma.service';

@Injectable()
export class CartsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getCart(userId: number) {
    const cart = await this.prismaService.cart.findUnique({
      where: { userId },
      include: {
        items: { include: { product: { include: { brand: true } } } },
      },
    });

    return cart;
  }

  async addItemToCart(userId: number, productId: number | undefined) {
    if (!productId) throw new BadRequestException('No productId');

    const cartItem = await this.prismaService.cartItem.upsert({
      where: { cartId_productId: { cartId: userId, productId } },
      create: { cartId: userId, productId, quantity: 1 },
      update: { quantity: { increment: 1 } },
    });

    return cartItem;
  }

  async removeItemFromCart(userId: number, productId: number | undefined) {
    if (!productId) throw new BadRequestException('No productId');

    const cartItem = await this.prismaService.cartItem.update({
      where: { cartId_productId: { cartId: userId, productId } },
      data: { quantity: { decrement: 1 } },
    });
    if (cartItem.quantity === 0) await this.clearItemInCart(userId, productId);

    return cartItem;
  }

  async clearItemInCart(userId: number, productId: number | undefined) {
    if (!productId) throw new BadRequestException('No productId');

    const cartItem = await this.prismaService.cartItem.delete({
      where: { cartId_productId: { cartId: userId, productId } },
    });

    return cartItem;
  }
}
