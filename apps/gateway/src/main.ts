import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);

  //Connect To Micro services
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'gateway_consumer',
      },
    },
  });

  await app.startAllMicroservices();

  await app.listen(2000, async () => {
    console.log('🔵 GATEWAY APP RUNNING ON PORT: ', await app.getUrl());
  });
}
bootstrap();
