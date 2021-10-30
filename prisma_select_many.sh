PROCESS_COUNT=20
seq $PROCESS_COUNT | xargs -n 1 -P $PROCESS_COUNT node out/sequelize/select_many_raw