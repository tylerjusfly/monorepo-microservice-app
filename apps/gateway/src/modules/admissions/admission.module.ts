import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AdmissionController } from './admission.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ADMISSIONS_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'products',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'admissions_consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AdmissionController],
  providers: [],
})
export class AdmissionModule {}
