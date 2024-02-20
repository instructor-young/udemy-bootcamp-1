import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserProfilesModule } from './user-profiles/user-profiles.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [UserProfilesModule],
})
export class UsersModule {}
