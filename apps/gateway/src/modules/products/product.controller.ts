import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  OnModuleInit,
  Get,
  Query,
} from '@nestjs/common';
import { ProductDto, PaginationOptionsInterface } from '@app/shared';
import { firstValueFrom } from 'rxjs';
import { ClientKafka } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  constructor(@Inject('PRODUCTS_SERVICE') private readonly productClient: ClientKafka) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('create')
  async signup(@Body() dto: ProductDto) {
    return await firstValueFrom(this.productClient.send('create_food', dto));
  }

  @Get('all')
  async allProducts(@Query() urlParams: PaginationOptionsInterface) {
    //console.log(urlParams);

    return await firstValueFrom(this.productClient.send('get_all_food', urlParams));
  }

  onModuleInit() {
    this.productClient.subscribeToResponseOf('create_food');
    this.productClient.subscribeToResponseOf('get_all_food');
  }
}
