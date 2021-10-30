import {Op} from 'sequelize';
import {ChildTable, MainTable, sequelize} from './base';

(async () => {
  let i = 0;
  while (true) {
    const mainTables: any = await MainTable.findAll({
      where: {int_prop1: {[Op.lt]: 500}},
      limit: 100,
      offset: i * 100,
      raw: true,
    });
    const childTables = await ChildTable.findAll({
      // @ts-ignore
      where: {main_table_id: mainTables.map(({main_table_id}) => main_table_id)},
    });
    if (i === 0) {
      console.log(mainTables[0]);
      console.log(childTables[0]);
    }
    console.log(i, mainTables.length);
    if (mainTables.length === 0) {
      break;
    }
    i++;
  }
  await sequelize.close();
})();
