import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProductController } from './product.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCTS_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'products',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'products_consumer',
          },
        },
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [],
})
export class ProductModule {}
