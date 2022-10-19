import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { UtilsLibraryModule } from '@app/utils-library';

@Module({
  imports: [UtilsLibraryModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
