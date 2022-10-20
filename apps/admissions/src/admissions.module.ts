import { Module } from '@nestjs/common';
import { AdmissionsController } from './admissions.controller';
import { AdmissionsService } from './admissions.service';
import { SharedModule } from '@app/shared';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'apps/gateway/orm.config';
import { AdmissionEntity } from './entity/admission.entity';

@Module({
  imports: [
    SharedModule,
    TypeOrmModule.forRoot(dbConfig),
    TypeOrmModule.forFeature([AdmissionEntity]),
  ],
  controllers: [AdmissionsController],
  providers: [AdmissionsService],
})
export class AdmissionsModule {}
