import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CafeteriaItem } from 'apps/products/src/entity/cafeteria_item.entity';

/*Creating database Options */
export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'tylerjusfly1996',
  port: 5432,
  host: '127.0.0.1',
  database: 'group_db',
  synchronize: true,
  //entities: [UserEntity, CafeteriaItem],
  entities: [__dirname + '/*/.entity{.ts,.js}', CafeteriaItem],
};
