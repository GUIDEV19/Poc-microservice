import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) {}

  getHealth(): { status: string } {
    return { status: 'ok' };
  }

  saveProduct(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async findProduct(id: string): Promise<Product | null> {
    return this.productRepository.findOneBy({ id });
  }
} 