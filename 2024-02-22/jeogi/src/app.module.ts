import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './db/prisma/prisma.module';
import { DomainsModule } from './domains/domains.module';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DomainsModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule {}
