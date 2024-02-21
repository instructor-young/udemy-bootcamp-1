import { Module } from '@nestjs/common';
import { UserProfilesModule } from './user-profiles/user-profiles.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [UserProfilesModule],
})
export class UsersModule {}
