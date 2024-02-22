import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PartnersModule } from './partners/partners.module';

@Module({
  imports: [UsersModule, PartnersModule],
})
export class AccountsModule {}
