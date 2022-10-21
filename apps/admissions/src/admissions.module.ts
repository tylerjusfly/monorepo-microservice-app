import { Module } from '@nestjs/common';
import { AdmissionsController } from './admissions.controller';
import { AdmissionsService } from './admissions.service';
import { SharedModule } from '@app/shared';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'apps/gateway/orm.config';
import { AdmissionEntity } from './entity/admission.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

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
    TypeOrmModule.forRoot(dbConfig),
    TypeOrmModule.forFeature([AdmissionEntity]),
  ],
  controllers: [AdmissionsController],
  providers: [AdmissionsService],
})
export class AdmissionsModule {}
