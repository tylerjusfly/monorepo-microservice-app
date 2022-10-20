import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  await app.listen(2000, async () => {
    console.log('🔵 GATEWAY APP RUNNING ON PORT: ', await app.getUrl());
  });
}
bootstrap();
