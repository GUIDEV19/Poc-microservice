import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { TcpModule } from './tcp/tcp.module';

async function bootstrap() {
  // HTTP Application
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);

  // TCP Microservice
  const microservice = await NestFactory.createMicroservice(TcpModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3002,
    },
  });
  await microservice.listen();
}
bootstrap(); 