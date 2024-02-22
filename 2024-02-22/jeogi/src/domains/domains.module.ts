import { Module } from '@nestjs/common';
import { AccountsModule } from './accounts/accounts.module';
import { AccommodationsModule } from './accommodations/accommodations.module';

@Module({
  imports: [AccountsModule, AccommodationsModule],
})
export class DomainsModule {}
