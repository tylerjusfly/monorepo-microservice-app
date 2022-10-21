import { Controller, Get, ForbiddenException, Inject } from '@nestjs/common';
import { ClientKafka, MessagePattern } from '@nestjs/microservices';
import { AdmissionsService } from './admissions.service';
import { AdmissionDto } from '@app/shared';

@Controller()
export class AdmissionsController {
  constructor(
    private readonly admissionsService: AdmissionsService,
    @Inject('GATEWAY_SERVICE') private readonly gatewayClient: ClientKafka,
  ) {}

  @MessagePattern('allAdmission')
  getall() {
    return this.admissionsService.fetchAllAdmissions();
  }

  @MessagePattern('create_admission')
  createOne(data: AdmissionDto) {
    return this.admissionsService.createAdmission(data);
  }

  onModuleInit() {
    this.gatewayClient.subscribeToResponseOf('get_user');
  }
}
