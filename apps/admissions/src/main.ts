import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AdmissionsModule } from './admissions.module';

const microserviceOptions: MicroserviceOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'admissions_consumer',
    },
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AdmissionsModule, microserviceOptions);

  await app.listen();
}
bootstrap();
