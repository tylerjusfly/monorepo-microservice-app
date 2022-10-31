import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@app/shared';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  password: string;

  @Column({ type: 'varchar', nullable: true })
  username: string;

  @Column({ type: 'text', nullable: true })
  bio: string;
}
