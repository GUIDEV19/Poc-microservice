import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClientService } from '../business/client.service';
import { Client } from '../entities/clients.entity';

@Controller()
export class ClientMicroserviceController {
  constructor(private readonly clientService: ClientService) {}

  @MessagePattern({ cmd: 'get_client' })
  async findClient(@Payload() id: string): Promise<Client | null> {
    return this.clientService.findClient(id);
  }

  @MessagePattern({ cmd: 'create_client' })
  async createClient(@Payload() client: any): Promise<Client> {
    return this.clientService.createClientEndProduct(client);
  }
}