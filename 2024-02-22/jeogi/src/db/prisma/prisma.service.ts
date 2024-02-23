import { faker } from '@faker-js/faker/locale/ko';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
    this.extends();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  extends() {
    this.$extends({
      query: {
        user: {
          async create({ args, query }) {
            args.data = {
              ...args.data,
              profile: {
                create: {
                  nickname: faker.internet.displayName(),
                },
              },
            };

            return query(args);
          },
        },
        accommodation: {
          async findMany({ model, operation, args, query }) {
            // 룸 생성할 때, 룸에 대한 예약을 3월 31일까지 미리 다 생성해 놓으려고

            const room = [] || (await query(args));
            const endDate = dayjs('2024-03-31');
            const startDate = dayjs();

            const diff = endDate.diff(startDate, 'date');
            console.log(diff);

            // 오늘 날짜 파악하고
            // 3월 31일까지를 배열로 만들어서
            // 돌려돌려~

            return room;
          },
        },
      },
    });
  }
}
