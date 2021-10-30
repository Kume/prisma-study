import {sequelize} from './base';

(async () => {
  await sequelize.sync();
  await sequelize.close();
})();
