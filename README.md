## 概要

prismaを試しに使ってみる + 大量のデータの操作をequelizeと比較してみる

### Prepare

```sh
yarn install

cd devinfra
docker-compose up -d

# wait for mysql to start

docker-compose exec mysql mysql -u root -proot
create database sequelize_db;
quit;

cd ..
cp prisma/.env.example prisma/.env
yarn prisma generate
yarn prisma migrate deploy
yarn tsc
node out/sequelize/init.js
```

### Measurement

```sh

# inserts 100,000 + 500,000 records with 100 processes.
time bash insert_prisma.sh
time bash insert_sequelize.sh

# select 50,000 records.
time node out/prisma/select_many.js
time node out/sequelize/select_many.js

```

```
// prisma
real    0m23.367s
user    4m6.138s
sys     0m20.372s

// sequelize
real    0m28.639s
user    7m22.805s
sys     0m10.087s

real    0m28.962s
user    7m25.159s
sys     0m11.263s
```
