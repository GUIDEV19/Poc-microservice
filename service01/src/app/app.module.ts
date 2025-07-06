import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { ClientServiceModule } from './clientService/clientService.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ClientServiceModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {} 