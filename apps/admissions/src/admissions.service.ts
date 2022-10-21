import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdmissionEntity } from './entity/admission.entity';
import { AdmissionDto } from '@app/shared';
import { Utilities } from '@app/utils-library';
import { firstValueFrom } from 'rxjs';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AdmissionsService {
  constructor(
    @InjectRepository(AdmissionEntity) private admissionRepository: Repository<AdmissionEntity>,
    @Inject('GATEWAY_SERVICE') private readonly gatewayClient: ClientKafka,
  ) {}

  async fetchAllAdmissions() {
    const query = this.admissionRepository.createQueryBuilder('q').select('q.*');

    return await query.getRawMany();
  }

  async createAdmission(data: AdmissionDto) {
    try {
      // Get User
      const userDetails = await firstValueFrom(this.gatewayClient.send('get_user', data.userId));

      if (!userDetails.success) {
        return { success: false, message: 'user Not Found' };
      }
      //return userDetails;
      //Check If user Exists
      const adId = new Utilities();

      const result = await this.admissionRepository.save({
        userId: userDetails.user.id,

        admissionId: adId.IncidentTrackerId(),

        departmentId: data.departmentId,

        isAccepted: data.isAccepted,
      });

      return { result, userDetails };
    } catch (error) {
      throw error;
    }
  }
}
