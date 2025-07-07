import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductService } from '../bussines/product.service';
import { Product } from '../entities/product.entity';

@Controller()
export class ProductMicroserviceController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern({ cmd: 'get_product' })
  async findProduct(@Payload() id: string): Promise<Product | null> {
    return this.productService.findProduct(id);
  }

  @MessagePattern({ cmd: 'create_product' })
  async createProduct(@Payload() product: Product): Promise<Product> {
    return this.productService.createProduct(product);
  }
}