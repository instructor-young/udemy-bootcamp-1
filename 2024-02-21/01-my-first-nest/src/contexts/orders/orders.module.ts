import { Module } from '@nestjs/common';
import { OrderItemsModule } from './order-items/order-items.module';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [OrderItemsModule],
})
export class OrdersModule {}
