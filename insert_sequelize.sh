PROCESS_COUNT=100
seq $PROCESS_COUNT | xargs -n 1 -P $PROCESS_COUNT node out/sequelize/insert.js