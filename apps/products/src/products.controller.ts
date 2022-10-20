import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { UtilsLibraryService } from '@app/utils-library';
import { MessagePattern } from '@nestjs/microservices';
import { ProductDto } from '@app/shared';

@Controller()
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private utilService: UtilsLibraryService,
  ) {}

  @MessagePattern('create_food')
  getHello(data: ProductDto) {
    return this.productsService.createFood(data);
  }
}
