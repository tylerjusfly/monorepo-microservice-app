import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { ProductModule } from './modules/products/product.module';
import { AdmissionModule } from './modules/admissions/admission.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilsLibraryModule } from '@app/utils-library';
import { SharedModule } from '@app/shared';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { dbConfig } from '../orm.config';

@Module({
  imports: [
    UtilsLibraryModule,
    SharedModule,
    UserModule,
    TypeOrmModule.forRoot(dbConfig),
    ProductModule,
    AdmissionModule,
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
