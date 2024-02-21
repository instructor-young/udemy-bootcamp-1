import { SetMetadata } from '@nestjs/common';

export const LoggedInOnly = () => SetMetadata('LoggedInOnly', true);
