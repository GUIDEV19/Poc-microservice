import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3003);
  console.log('Service 02 is running on port 3003');

  const microservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 4003, // Service 02's microservice port
    },
  });
  await microservice.listen();
  console.log('Service 02 microservice is listening on port 4003');
}
bootstrap(); 