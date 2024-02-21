import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './contexts/accounts/accounts.module';
import { BrandsModule } from './contexts/brands/brands.module';
import { CartsModule } from './contexts/carts/carts.module';
import { OrdersModule } from './contexts/orders/orders.module';
import { ProductsModule } from './contexts/products/products.module';
import { PrismaModule } from './db/prisma/prisma.module';
import { LoggedInOnlyGuard } from './guards/loggedInOnly.guard';
import { AuthMiddleware } from './middlewares/auth.middleware';

@Module({
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: LoggedInOnlyGuard }],
  imports: [
    AccountsModule,
    ProductsModule,
    OrdersModule,
    CartsModule,
    PrismaModule,
    BrandsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
