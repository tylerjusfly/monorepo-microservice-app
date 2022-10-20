import { Controller, Get, ForbiddenException } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AdmissionsService } from './admissions.service';
import { AdmissionDto } from '@app/shared';

@Controller()
export class AdmissionsController {
  constructor(private readonly admissionsService: AdmissionsService) {}

  @MessagePattern('allAdmission')
  getall() {
    return this.admissionsService.fetchAllAdmissions();
  }

  @MessagePattern('create_admission')
  createOne(data: AdmissionDto) {
    return this.admissionsService.createAdmission(data);
  }
}
