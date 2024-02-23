import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';

@Module({
  providers: [RoomsService],
  exports: [RoomsService],
  controllers: [RoomsController],
})
export class RoomsModule {}
