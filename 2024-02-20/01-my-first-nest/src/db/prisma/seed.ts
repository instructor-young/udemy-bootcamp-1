import { PrismaClient } from '@prisma/client';
import data from './data';

const prismaClient = new PrismaClient();

async function seed() {
  const products = data.products;

  const startTime = Date.now();
  console.log('시작~', startTime);

  for (const product of products) {
    await prismaClient.product.upsert({
      where: { id: Number(product.id) },
      update: {},
      create: {
        id: Number(product.id),
        name: product.goodsnm.trim(),
        imgSrc: product.img_i,
        deliveryType: '로켓배송',
        onlineStock: 9999,
        originalPrice: product.standard_price,
        price: product.price,
        brand: {
          connectOrCreate: {
            where: { id: product.brand.id },
            create: {
              id: product.brand.id,
              nameEn: product.brand.name.trim(),
              nameKr: product.brand.kr_name.trim(),
            },
          },
        },
      },
    });
  }

  const endTime = Date.now();

  const duration = (endTime - startTime) / 1000;
  console.log('완료~', `${duration}초 걸림`);
}

seed();
