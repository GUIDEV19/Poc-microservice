import { Inject, Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) {}

  async createProduct(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async findProduct(id: string): Promise<Product | null> {
    return this.productRepository.findOneBy({ id });
  }
}