import { Module } from '@nestjs/common';
import { UserProfilesService } from './user-profiles.service';

@Module({
  providers: [UserProfilesService],
})
export class UserProfilesModule {}
