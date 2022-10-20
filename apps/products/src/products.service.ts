import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CafeteriaItem } from './entity/cafeteria_item.entity';
import { ProductDto } from '@app/shared';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(CafeteriaItem)
    private cafeteriaRepository: Repository<CafeteriaItem>,
  ) {}

  async createFood(data: ProductDto) {
    return await this.cafeteriaRepository.save({
      foodname: data.foodname,
      quantity: data.quantity,
      approved: data.approved,
      approved_at: null,
      approved_by: null,
    });
  }
}
