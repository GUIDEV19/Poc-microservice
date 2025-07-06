import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Product } from '../entities/product.entity';
import { AppService } from '../app.service';

@Controller()
export class TcpController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get_product' })
  async getProduct(id: string): Promise<Product | null> {
    return this.appService.findProduct(id);
  }

  @MessagePattern({ cmd: 'create_product' })
  async createProduct(product: Product): Promise<Product> {
    return this.appService.saveProduct(product);
  }
} 