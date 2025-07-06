import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Client } from '../entities/clients.entity';
import { ProductService } from '../../productService/businnes/product.service';

@Injectable()
export class ClientService {
  constructor(
    @Inject('CLIENTS_REPOSITORY')
    private clientsRepository: Repository<Client>,
    private productService: ProductService,
  ) {}

  async findClient(id: string): Promise<Client | null> {
    return this.clientsRepository.findOneBy({ id });
  }

  async findAllClients(): Promise<Client[]> {
    return this.clientsRepository.find();
  }

  async createClientEndProduct(client: any): Promise<Client> {
    await this.productService.createProduct(client.product);
    return this.clientsRepository.save(client);
  }
}