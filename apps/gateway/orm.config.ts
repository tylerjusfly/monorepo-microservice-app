import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AdmissionEntity } from 'apps/admissions/src/entity/admission.entity';
import { CafeteriaItem } from '../products/src/entity/cafeteria_item.entity';
import { UserEntity } from './src/modules/users/entities/user.entity';

/*Creating database Options */
export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'tylerjusfly1996',
  port: 5432,
  host: '127.0.0.1',
  database: 'group_db',
  synchronize: true,
  entities: [CafeteriaItem, UserEntity, AdmissionEntity],
};
