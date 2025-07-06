import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ClientModule } from './app/client/client.module';
import { ProductModule } from './app/productService/product.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    ClientModule,
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {} 