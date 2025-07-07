import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProductService } from './bussines/product.service';
import { productProviders } from './provider/product.provider';
import { ProductController } from './controller/product.controller';
import { ProductMicroserviceController } from './controller/product.microservice.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController, ProductMicroserviceController],
  providers: [ProductService, ...productProviders],
})
export class ProductModule {} 
