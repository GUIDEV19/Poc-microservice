import { Module } from '@nestjs/common';
import { ProductService } from './businnes/product.service';


@Module({
  imports: [],
  controllers: [],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}