import { Module } from '@nestjs/common';
import { TcpController } from './tcp.controller';
import { AppService } from '../app.service';
import { productProviders } from '../product.provider';
import { DatabaseModule } from '../database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  controllers: [TcpController],
  providers: [...productProviders, AppService],
})
export class TcpModule {} 