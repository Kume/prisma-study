import {ulid} from 'ulid';
import {ChildTable, MainTable, sequelize} from './base';

(async () => {
  // await waitAsync(20000);
  for (let i = 0; i < 1000; i++) {
    const now = new Date();
    await MainTable.create(
      {
        main_table_id: ulid(),
        string_prop1: 'a',
        int_prop1: i,
        created_at: now,
        updated_at: now,
        child_tables: [
          {child_table_id: ulid(), string_prop1: 'aa', int_prop1: 0, created_at: now, updated_at: now},
          {child_table_id: ulid(), string_prop1: 'ab', int_prop1: 0, created_at: now, updated_at: now},
          {child_table_id: ulid(), string_prop1: 'ac', int_prop1: 0, created_at: now, updated_at: now},
          {child_table_id: ulid(), string_prop1: 'ad', int_prop1: 0, created_at: now, updated_at: now},
          {child_table_id: ulid(), string_prop1: 'ae', int_prop1: 0, created_at: now, updated_at: now},
        ],
      },
      {
        include: {
          model: ChildTable,
          as: 'child_tables',
        },
      },
    );
  }

  await sequelize.close();
})();
