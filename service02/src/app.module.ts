import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { DatabaseModule } from './database/database.module';
import { clientsProviders } from './clients.provider';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  controllers: [AppController, ProductController, ClientController],
  providers: [AppService, ProductService, ClientService, ...clientsProviders],
})
export class AppModule {} 