import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Client } from './entities/clients.entity';
import { CreateClientDto, UpdateClientDto } from './types/client.types';
import { ProductService } from './product.service';

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
    const product = await this.productService.createProduct(client.product);
    return this.clientsRepository.save(client);
  }

  async createClient(createClientDto: CreateClientDto): Promise<Client> {
    const client = this.clientsRepository.create(createClientDto);
    return this.clientsRepository.save(client);
  }

  async updateClient(id: string, updateClientDto: UpdateClientDto): Promise<Client | null> {
    await this.clientsRepository.update(id, updateClientDto);
    return this.findClient(id);
  }

  async deleteClient(id: string): Promise<boolean> {
    const result = await this.clientsRepository.delete(id);
    return result.affected ? result.affected > 0 : false;
  }
}