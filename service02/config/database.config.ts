import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from 'path';

export const databaseConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'database_service2',
    port: 3306,
    username: 'service2',
    password: 'service2',
    database: 'service2',
    entities: [join(__dirname, '..', '**', '*.entity{.ts,.js}')],
    migrations: [join(__dirname, '..', 'database', 'migrations', '*{.ts,.js}')],
    migrationsRun: true,
    synchronize: process.env.NODE_ENV === 'development',
    logging: ['error', 'warn', 'schema'],
    logger: 'advanced-console',
    poolSize: 10,
    connectTimeout: 10000,
    maxQueryExecutionTime: 5000,
    
    retryAttempts: 3,
    retryDelay: 3000,
    extra: {
        connectionLimit: 10,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0,
    },
    
    ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: true,
    } : undefined,
};
