import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdmissionEntity } from './entity/admission.entity';
import { AdmissionDto } from '@app/shared';
import { Utilities } from '@app/utils-library';

@Injectable()
export class AdmissionsService {
  constructor(
    @InjectRepository(AdmissionEntity) private admissionRepository: Repository<AdmissionEntity>,
  ) {}

  async fetchAllAdmissions() {
    const query = this.admissionRepository.createQueryBuilder('q').select('q.*');

    return await query.getRawMany();
  }

  async createAdmission(data: AdmissionDto) {
    try {
      //Check If user Exists
      const adId = new Utilities();

      const result = await this.admissionRepository.save({
        userId: data.userId,

        admissionId: adId.IncidentTrackerId(),

        departmentId: data.departmentId,

        isAccepted: data.isAccepted,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
}
