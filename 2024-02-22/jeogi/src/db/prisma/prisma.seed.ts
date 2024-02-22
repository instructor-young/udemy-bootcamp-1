import { PrismaClient } from '@prisma/client';

const regions = [
  { label: '경기', name: 'gyeonggi' },
  { label: '제주도', name: 'jejuisland' },
  { label: '충남', name: 'chungnam' },
  { label: '인천', name: 'incheon' },
  { label: '대구', name: 'daegu' },
  { label: '대전', name: 'daejeon' },
  { label: '서울', name: 'seoul' },
  { label: '경남', name: 'gyeongnam' },
  { label: '부산', name: 'busan' },
  { label: '전북', name: 'jeonbuk' },
  { label: '울산', name: 'ulsan' },
  { label: '광주', name: 'gwangju' },
  { label: '강원', name: 'gangwon' },
  { label: '경북', name: 'gyeongbuk' },
  { label: '전남', name: 'jeonnam' },
  { label: '충북', name: 'chungbuk' },
  { label: '세종', name: 'sejong' },
  { label: '경주', name: 'gyeongju' },
  { label: '강릉', name: 'gangneung' },
  { label: '여수', name: 'yeosu' },
  { label: '전주', name: 'jeonju' },
  { label: '속초', name: 'sokcho' },
  { label: '포항', name: 'pohang' },
  { label: '해운대', name: 'haeundae' },
  { label: '가평', name: 'gapyeong' },
  { label: '군산', name: 'gunsan' },
  { label: '광안리', name: 'gwanganri' },
  { label: '통영', name: 'tongyeong' },
  { label: '안동', name: 'andong' },
  { label: '기장', name: 'gijang' },
  { label: '거제', name: 'geoje' },
  { label: '남해', name: 'namhae' },
  { label: '울진', name: 'uljin' },
  { label: '천안', name: 'cheonan' },
  { label: '양양', name: 'yangyang' },
  { label: '제주', name: 'jeju' },
  { label: '목포', name: 'mokpo' },
  { label: '평창', name: 'pyeongchang' },
  { label: '강화도', name: 'ganghwaisland' },
  { label: '서울역', name: 'seoulstation' },
];

async function seed() {
  const prismaClient = new PrismaClient();

  const result = await Promise.all(
    regions.map((region) =>
      prismaClient.region.upsert({
        where: { name: region.name },
        update: {},
        create: { name: region.name, label: region.label },
      }),
    ),
  );

  console.log(result);
}

seed();
