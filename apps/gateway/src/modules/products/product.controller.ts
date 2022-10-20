import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  OnModuleInit,
} from '@nestjs/common';
import { ProductDto } from '@app/shared';
import { firstValueFrom } from 'rxjs';
import { ClientKafka } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  constructor(
    @Inject('PRODUCTS_SERVICE') private readonly productClient: ClientKafka,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('create')
  async signup(@Body() dto: ProductDto) {
    console.log(dto);
    return await firstValueFrom(this.productClient.send('create_food', dto));
  }

  onModuleInit() {
    this.productClient.subscribeToResponseOf('create_food');
  }
}
