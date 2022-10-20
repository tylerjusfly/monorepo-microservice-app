import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  OnModuleInit,
  Post,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { AdmissionDto } from '@app/shared';

@Controller('admission')
export class AdmissionController {
  constructor(@Inject('ADMISSIONS_SERVICE') private readonly admissionClient: ClientKafka) {}

  @HttpCode(HttpStatus.OK)
  @Get('all')
  async getAllAdmission() {
    return await firstValueFrom(this.admissionClient.send('allAdmission', {}));
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('create')
  async createAdmission(@Body() data: AdmissionDto) {
    if (!data.userId && data.departmentId) {
      return new ForbiddenException('fields are required');
    }

    return await firstValueFrom(this.admissionClient.send('create_admission', data));
  }

  onModuleInit() {
    this.admissionClient.subscribeToResponseOf('allAdmission');
    this.admissionClient.subscribeToResponseOf('create_admission');
  }
}
