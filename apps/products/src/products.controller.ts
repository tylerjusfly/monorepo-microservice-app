import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { UtilsLibraryService } from '@app/utils-library';
import { MessagePattern } from '@nestjs/microservices';
import { ProductDto, PaginationOptionsInterface } from '@app/shared';

@Controller()
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private utilService: UtilsLibraryService,
  ) {}

  @MessagePattern('create_food')
  createFood(data: ProductDto) {
    return this.productsService.createFood(data);
  }

  @MessagePattern('get_all_food')
  getAllFood(options: PaginationOptionsInterface) {
    let limit = +options.limit ? options.limit : 5;
    let page = +options.page ? options.page : 1;
    return this.productsService.get_all({ limit, page });
  }
}
