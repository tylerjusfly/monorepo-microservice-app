import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { UtilsLibraryModule } from '@app/utils-library';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CafeteriaItem } from './entity/cafeteria_item.entity';
import { dbConfig } from 'apps/gateway/orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    UtilsLibraryModule,
    TypeOrmModule.forFeature([CafeteriaItem]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, CafeteriaItem],
})
export class ProductsModule {}
