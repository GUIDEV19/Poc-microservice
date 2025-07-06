import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { Product, CreateProductDto } from '../../../types/product.types';

@Injectable()
export class ProductService implements OnModuleInit {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'service01',
        port: 3001,
      },
    });
  }

  async onModuleInit() {
    try {
      await this.client.connect();
    } catch (error) {
      console.error('Failed to connect to product service:', error);
    }
  }

  async getProduct(id: string): Promise<Product | null> {
    try {
      return await firstValueFrom(this.client.send({ cmd: 'get_product' }, id));
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }

  async createProduct(product: CreateProductDto): Promise<Product> {
    try {
      return await firstValueFrom(this.client.send({ cmd: 'create_product' }, product));
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  }
} 