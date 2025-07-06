import { Controller, Get, Post, Param, Body, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product, CreateProductDto } from './types/product.types';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  async getProduct(@Param('id') id: string): Promise<Product> {
    try {
      const product = await this.productService.getProduct(id);
      if (!product) {
        throw new NotFoundException(`Product with ID ${id} not found`);
      }
      return product;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error fetching product');
    }
  }

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    try {
      return await this.productService.createProduct(createProductDto);
    } catch (error) {
      throw new InternalServerErrorException('Error creating product');
    }
  }
} 