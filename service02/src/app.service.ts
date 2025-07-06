import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Client } from './entities/clients.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('CLIENTS_REPOSITORY')
    private clientsRepository: Repository<Client>,
  ) {}

  getHealth(): { status: string } {
    return { status: 'ok' };
  }

  async findClient(id: string): Promise<Client | null> {
    return this.clientsRepository.findOneBy({ id });
  }

  async saveClient(client: Client): Promise<Client> {
    return this.clientsRepository.save(client);
  }
}
