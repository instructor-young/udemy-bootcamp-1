import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './contexts/accounts/accounts.module';
import { CartsModule } from './contexts/carts/carts.module';
import { OrdersModule } from './contexts/orders/orders.module';
import { ProductsModule } from './contexts/products/products.module';
import { PrismaModule } from './db/prisma/prisma.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    AccountsModule,
    ProductsModule,
    OrdersModule,
    CartsModule,
    PrismaModule,
  ],
})
export class AppModule {}
