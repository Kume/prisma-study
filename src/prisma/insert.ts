import {PrismaClient} from '@prisma/client';
import {ulid} from 'ulid';
const prisma = new PrismaClient();

function waitAsync(timeout: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

void (async () => {
  // await waitAsync(20000);
  for (let i = 0; i < 1000; i++) {
    const now = new Date();
    await prisma.mainTable.create({
      data: {
        main_table_id: ulid(),
        string_prop1: 'a',
        int_prop1: i,
        created_at: now,
        updated_at: now,
        child_tables: {
          create: [
            {child_table_id: ulid(), string_prop1: 'aa', int_prop1: 0, created_at: now, updated_at: now},
            {child_table_id: ulid(), string_prop1: 'ab', int_prop1: 0, created_at: now, updated_at: now},
            {child_table_id: ulid(), string_prop1: 'ac', int_prop1: 0, created_at: now, updated_at: now},
            {child_table_id: ulid(), string_prop1: 'ad', int_prop1: 0, created_at: now, updated_at: now},
            {child_table_id: ulid(), string_prop1: 'ae', int_prop1: 0, created_at: now, updated_at: now},
          ],
        },
      },
    });
  }

  await prisma.$disconnect();
})();
