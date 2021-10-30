import {Op} from 'sequelize';
import {ChildTable, MainTable, sequelize} from './base';

(async () => {
  let i = 0;
  while (true) {
    const mainTables = await MainTable.findAll({
      where: {int_prop1: {[Op.lt]: 500}},
      limit: 100,
      offset: i * 100,
      include: {
        model: ChildTable,
        as: 'child_tables',
      },
    });
    if (i === 0) {
      console.log(mainTables[0].toJSON());
    }
    console.log(i, mainTables.length);
    if (mainTables.length === 0) {
      break;
    }
    i++;
  }
  await sequelize.close();
})();
