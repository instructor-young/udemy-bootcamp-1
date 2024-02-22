import { SetMetadata } from '@nestjs/common';
import { AccountType } from 'src/domains/accounts/accounts.type';

export const Private = (accountType: AccountType) =>
  SetMetadata('accountType', accountType);
