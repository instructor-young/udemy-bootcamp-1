import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { LoggedInOnly } from 'src/decorators/loggedInOnly.decorator';
import { DUser } from 'src/decorators/user.decorator';
import { CartsService } from './carts.service';

@Controller('cart')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Get()
  @LoggedInOnly()
  getCart(@DUser() user: User) {
    return this.cartsService.getCart(user.id);
  }

  @Post('products/:productId')
  @LoggedInOnly()
  addItemToCart(
    @DUser() user: User,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.cartsService.addItemToCart(user.id, productId);
  }

  @Delete('products/:productId')
  @LoggedInOnly()
  removeItemFromCart(
    @DUser() user: User,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.cartsService.removeItemFromCart(user.id, productId);
  }

  @Delete('products/:productId/clear')
  @LoggedInOnly()
  clearItemInCart(
    @DUser() user: User,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.cartsService.clearItemInCart(user.id, productId);
  }
}
