import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { UtilsLibraryModule } from '@app/utils-library';
import { SharedModule, GatewayDatabaseModule, CafeteriaItem } from '@app/shared';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    SharedModule,
    UtilsLibraryModule,
    GatewayDatabaseModule,
    TypeOrmModule.forFeature([CafeteriaItem]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
