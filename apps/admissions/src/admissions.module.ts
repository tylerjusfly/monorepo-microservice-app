import { Module } from '@nestjs/common';
import { AdmissionsController } from './admissions.controller';
import { AdmissionsService } from './admissions.service';
import { SharedModule, GatewayDatabaseModule, AdmissionEntity } from '@app/shared';

import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GATEWAY_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'products',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'gateway_consumer',
          },
        },
      },
    ]),
    SharedModule,
    GatewayDatabaseModule,
    TypeOrmModule.forFeature([AdmissionEntity]),
  ],
  controllers: [AdmissionsController],
  providers: [AdmissionsService],
})
export class AdmissionsModule {}
