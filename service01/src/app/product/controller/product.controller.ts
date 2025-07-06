import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { ProductService } from '../bussines/product.service';
import { Product } from '../entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() product: Product): Promise<Product> {
    return this.productService.createProduct(product);
  }

  @Get(':id')
  async findProduct(@Param('id') id: string): Promise<Product | null> {
    return this.productService.findProduct(id);
  }
}