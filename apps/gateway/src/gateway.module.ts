import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { UtilsLibraryModule } from '@app/utils-library';
import { UserModule } from './modules/users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from '../orm.config';
import { ProductModule } from './modules/products/product.module';

@Module({
  imports: [
    UtilsLibraryModule,
    UserModule,
    TypeOrmModule.forRoot(dbConfig),
    ProductModule,
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
