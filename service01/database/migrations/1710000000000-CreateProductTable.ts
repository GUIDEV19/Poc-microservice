import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateProductTable1710000000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length: "36",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "uuid"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "100",
                        isNullable: false
                    },
                    {
                        name: "description",
                        type: "text",
                        isNullable: true
                    },
                    {
                        name: "price",
                        type: "decimal",
                        precision: 10,
                        scale: 2,
                        isNullable: false
                    },
                    {
                        name: "quantity",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "sku",
                        type: "varchar",
                        length: "50",
                        isNullable: false
                    },
                    {
                        name: "category",
                        type: "varchar",
                        length: "50",
                        isNullable: true
                    },
                    {
                        name: "minimumStock",
                        type: "int",
                        default: 0,
                        isNullable: false
                    },
                    {
                        name: "active",
                        type: "boolean",
                        default: true,
                        isNullable: false
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        isNullable: false
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                        isNullable: false
                    }
                ]
            }),
            true
        );

        await queryRunner.createIndex(
            "products",
            new TableIndex({
                name: "IDX_PRODUCTS_NAME",
                columnNames: ["name"]
            })
        );

        await queryRunner.createIndex(
            "products",
            new TableIndex({
                name: "IDX_PRODUCTS_SKU",
                columnNames: ["sku"],
                isUnique: true
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("products", "IDX_PRODUCTS_SKU");
        await queryRunner.dropIndex("products", "IDX_PRODUCTS_NAME");
        await queryRunner.dropTable("products");
    }
} 