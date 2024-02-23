import { faker } from '@faker-js/faker/locale/ko';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

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
      },
    });
  }
}
