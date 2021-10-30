import {Sequelize, Model, DataTypes} from 'sequelize';

export const sequelize = new Sequelize('sequelize_db', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
  dialectOptions: {
    socketPath: '/home/makoto/extdisk/home/makoto/mysql/mysql.sock',
  },
  logging: false,
});

export class MainTable extends Model {}
MainTable.init(
  {
    main_table_id: {type: DataTypes.CHAR({length: 26}), primaryKey: true},
    string_prop1: {type: DataTypes.STRING, allowNull: false},
    string_prop2: {type: DataTypes.STRING, allowNull: true},
    string_prop3: {type: DataTypes.STRING, allowNull: true},
    string_prop4: {type: DataTypes.STRING, allowNull: true},
    string_prop5: {type: DataTypes.STRING, allowNull: true},
    int_prop1: {type: DataTypes.INTEGER, allowNull: false},
    int_prop2: {type: DataTypes.INTEGER, allowNull: true},
    int_prop3: {type: DataTypes.INTEGER, allowNull: true},
    int_prop4: {type: DataTypes.INTEGER, allowNull: true},
    int_prop5: {type: DataTypes.INTEGER, allowNull: true},
    created_at: {type: DataTypes.DATE, allowNull: false},
    updated_at: {type: DataTypes.DATE, allowNull: false},
  },
  {
    sequelize,
    modelName: 'main_table',
    underscored: true,
    timestamps: false,
  },
);

export class ChildTable extends Model {}
ChildTable.init(
  {
    child_table_id: {type: DataTypes.CHAR({length: 26}), primaryKey: true},
    string_prop1: {type: DataTypes.STRING, allowNull: false},
    string_prop2: {type: DataTypes.STRING, allowNull: true},
    string_prop3: {type: DataTypes.STRING, allowNull: true},
    int_prop1: {type: DataTypes.INTEGER, allowNull: false},
    int_prop2: {type: DataTypes.INTEGER, allowNull: true},
    int_prop3: {type: DataTypes.INTEGER, allowNull: true},
    created_at: {type: DataTypes.DATE, allowNull: false},
    updated_at: {type: DataTypes.DATE, allowNull: false},
    main_table_id: {type: DataTypes.CHAR(26), allowNull: false},
  },
  {
    sequelize,
    modelName: 'child_table',
    underscored: true,
    timestamps: false,
  },
);

MainTable.hasMany(ChildTable, {
  as: 'child_tables',
  sourceKey: 'main_table_id',
  foreignKey: 'main_table_id',
});
ChildTable.belongsTo(MainTable, {
  as: 'main_table',
  foreignKey: 'main_table_id',
});
