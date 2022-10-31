import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AdmissionEntity } from '../entity/admission.entity';
import { UserEntity } from '../entity/user.entity';
import { CafeteriaItem } from '../entity/cafeteria_item.entity';

/*Creating database Options */
const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'tylerjusfly1996',
  port: 5432,
  host: '127.0.0.1',
  database: 'group_db',
  synchronize: true,
  //   autoLoadEntities: true,
  entities: [UserEntity, AdmissionEntity, CafeteriaItem],
};

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig)],
})
export class GatewayDatabaseModule {}
