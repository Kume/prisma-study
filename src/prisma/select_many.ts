import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

void (async () => {
  let i = 0;
  while (true) {
    const mainTables = await prisma.mainTable.findMany({
      where: {int_prop1: {lt: 500}},
      include: {child_tables: true},
      take: 100,
      skip: i * 100,
    });

    if (i === 0) {
      console.log(mainTables[0]);
    }
    console.log(i, mainTables.length);
    if (mainTables.length === 0) {
      break;
    }
    i++;
  }

  await prisma.$disconnect();
})();
