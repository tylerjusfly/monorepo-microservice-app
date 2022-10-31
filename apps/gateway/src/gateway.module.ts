import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { ProductModule } from './modules/products/product.module';
import { AdmissionModule } from './modules/admissions/admission.module';
import { UtilsLibraryModule } from '@app/utils-library';
import { SharedModule, GatewayDatabaseModule } from '@app/shared';

@Module({
  imports: [
    UtilsLibraryModule,
    SharedModule,
    UserModule,
    GatewayDatabaseModule,
    ProductModule,
    AdmissionModule,
  ],
  controllers: [],
  providers: [],
})
export class GatewayModule {}
