import { BaseEntity } from '@app/shared';
import { Column, Entity } from 'typeorm';

@Entity('admissions')
export class AdmissionEntity extends BaseEntity {
  @Column({ type: 'integer' })
  userId: number;

  @Column({ type: 'varchar' })
  admissionId: string;

  @Column({ type: 'integer' })
  departmentId: number;

  @Column({ type: 'boolean', default: false })
  isAccepted: boolean;
}
