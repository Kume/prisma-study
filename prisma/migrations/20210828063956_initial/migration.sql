-- CreateTable
CREATE TABLE `MainTable` (
    `main_table_id` CHAR(26) NOT NULL,
    `string_prop1` VARCHAR(191) NOT NULL,
    `string_prop2` VARCHAR(191),
    `string_prop3` VARCHAR(191),
    `string_prop4` VARCHAR(191),
    `string_prop5` VARCHAR(191),
    `int_prop1` INTEGER NOT NULL,
    `int_prop2` INTEGER,
    `int_prop3` INTEGER,
    `int_prop4` INTEGER,
    `int_prop5` INTEGER,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`main_table_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChildTable` (
    `child_table_id` CHAR(26) NOT NULL,
    `string_prop1` VARCHAR(191) NOT NULL,
    `string_prop2` VARCHAR(191),
    `string_prop3` VARCHAR(191),
    `int_prop1` INTEGER NOT NULL,
    `int_prop2` INTEGER,
    `int_prop3` INTEGER,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,
    `main_table_id` CHAR(26) NOT NULL,

    PRIMARY KEY (`child_table_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ChildTable` ADD FOREIGN KEY (`main_table_id`) REFERENCES `MainTable`(`main_table_id`) ON DELETE CASCADE ON UPDATE CASCADE;
