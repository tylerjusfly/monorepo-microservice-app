import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '@app/shared';

@Entity({ name: 'cafeteria_items' })
export class CafeteriaItem extends BaseEntity {
  foodname: string;

  @Column({ type: 'integer', default: 0 })
  quantity: number;

  @Column({ type: 'boolean', default: false })
  approved: boolean;

  @Column({ type: 'varchar', nullable: true })
  approved_by: string;

  @Column({ nullable: true })
  approved_at: string;
}
