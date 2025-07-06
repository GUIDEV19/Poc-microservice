import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateClientTable1710000000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clients",
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
                        name: "email",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        length: "20",
                        isNullable: true
                    },
                    {
                        name: "document",
                        type: "varchar",
                        length: "20",
                        isNullable: false,
                        isUnique: true,
                        comment: "CPF/CNPJ do cliente"
                    },
                    {
                        name: "address",
                        type: "text",
                        isNullable: true
                    },
                    {
                        name: "city",
                        type: "varchar",
                        length: "100",
                        isNullable: true
                    },
                    {
                        name: "state",
                        type: "varchar",
                        length: "2",
                        isNullable: true
                    },
                    {
                        name: "zipCode",
                        type: "varchar",
                        length: "10",
                        isNullable: true
                    },
                    {
                        name: "type",
                        type: "enum",
                        enum: ["INDIVIDUAL", "COMPANY"],
                        default: "'INDIVIDUAL'",
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
            "clients",
            new TableIndex({
                name: "IDX_CLIENTS_EMAIL",
                columnNames: ["email"],
                isUnique: true
            })
        );

        await queryRunner.createIndex(
            "clients",
            new TableIndex({
                name: "IDX_CLIENTS_DOCUMENT",
                columnNames: ["document"],
                isUnique: true
            })
        );

        await queryRunner.createIndex(
            "clients",
            new TableIndex({
                name: "IDX_CLIENTS_NAME",
                columnNames: ["name"]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("clients", "IDX_CLIENTS_EMAIL");
        await queryRunner.dropIndex("clients", "IDX_CLIENTS_DOCUMENT");
        await queryRunner.dropIndex("clients", "IDX_CLIENTS_NAME");
        await queryRunner.dropTable("clients");
    }
} 