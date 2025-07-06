import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { ClientService } from '../business/client.service';
import { Client, CreateClientDto, UpdateClientDto } from '../../../types/client.types';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async findAllClients(): Promise<Client[]> {
    try {
      return await this.clientService.findAllClients();
    } catch (error) {
      throw new InternalServerErrorException('Error fetching clients');
    }
  }

  @Get(':id')
  async findClient(@Param('id') id: string): Promise<Client> {
    try {
      const client = await this.clientService.findClient(id);
      if (!client) {
        throw new NotFoundException(`Client with ID ${id} not found`);
      }
      return client;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error fetching client');
    }
  }

  @Post()
  async createClient(@Body() client: any): Promise<Client> {
    try {
      return await this.clientService.createClientEndProduct(client);
    } catch (error) {
      throw new InternalServerErrorException('Error creating client');
    }
  }
} 