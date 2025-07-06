import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ClientController } from './controller/client.controller';
import { ClientService } from './business/client.service';
import { clientsProviders } from './provider/clients.provider';
import { ProductModule } from '../productService/product.module';

@Module({
  imports: [DatabaseModule, ProductModule],
  controllers: [ClientController],
  providers: [ClientService, ...clientsProviders],
})
export class ClientModule {}