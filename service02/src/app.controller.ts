import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

import { Client } from './entities/clients.entity';
import { ClientService } from './client.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly clientService: ClientService) {}

  @Get()
  getHealth(): { status: string } {
    return this.appService.getHealth();
  }

  @Post('clients')
  async createClient(@Body() client: any): Promise<Client> {
    return this.clientService.createClientEndProduct(client);
  }
}
