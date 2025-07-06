import { Module } from '@nestjs/common';
import { ClientService } from './bussines/clientService.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ClientService],
})
export class ClientServiceModule {} 