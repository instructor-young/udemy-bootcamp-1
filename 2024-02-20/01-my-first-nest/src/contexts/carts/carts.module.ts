import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { CartItemsModule } from './cart-items/cart-items.module';

@Module({
  controllers: [CartsController],
  providers: [CartsService],
  imports: [CartItemsModule],
})
export class CartsModule {}
