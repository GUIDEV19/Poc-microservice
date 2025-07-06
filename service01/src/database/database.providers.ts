import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: configService.get('DB_HOST', 'database_service1'),
        port: configService.get('DB_PORT', 3306),
        username: configService.get('DB_USERNAME', 'root'),
        password: configService.get('DB_PASSWORD', 'root'),
        database: configService.get('DB_DATABASE', 'service1'),
        entities: [__dirname + '/../app/**/**/*.entity{.ts,.js}'],
        synchronize: false,
        logging: ['error', 'warn', 'schema'],
        extra: {
          connectionLimit: 10,
          queueLimit: 0,
          enableKeepAlive: true,
          keepAliveInitialDelay: 0,
        },
      });

      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
]; 