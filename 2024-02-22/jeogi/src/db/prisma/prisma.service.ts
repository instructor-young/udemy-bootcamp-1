import { fakerKO } from '@faker-js/faker';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient, Room, User } from '@prisma/client';
import { nanoid } from 'nanoid';
import day from 'src/utils/day';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();

    this.setMiddlewares();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  setMiddlewares() {
    this.$use(async (params, next) => {
      const model = params.model;
      const action = params.action;

      const result = await next(params);

      if (model === 'Room' && action === 'create') {
        const room = result as Room;

        const today = day().startOf('day');
        const endDate = day('2024-03-31');
        const diffInDay = endDate.diff(today, 'day') + 1;

        const promises = Array(diffInDay)
          .fill(0)
          .map((_, index) => {
            const date = today.add(index, 'day').toDate();

            return this.reservation.create({
              data: {
                id: nanoid(),
                date,
                roomId: room.id,
              },
            });
          });

        await Promise.all(promises);
      }

      if (model === 'User' && action === 'create') {
        const user = result as User;

        await this.userProfile.create({
          data: { userId: user.id, nickname: fakerKO.internet.displayName() },
        });
      }

      return result;
    });
  }
}
