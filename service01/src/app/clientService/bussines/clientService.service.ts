import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ClientServiceDto } from '../dto/clientService.dto';

@Injectable()
export class ClientService {
    private client: ClientProxy;
    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: 'service02',
                port: 4002,
            },
        });
    }

    async findClient(id: string): Promise<any> {
        return this.client.send({ cmd: 'get_client' }, id);
    }

    async createClient(client: ClientServiceDto): Promise<any> {
        return this.client.send({ cmd: 'create_client' }, client);
    }
}