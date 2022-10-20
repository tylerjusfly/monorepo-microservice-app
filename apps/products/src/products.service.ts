import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CafeteriaItem } from './entity/cafeteria_item.entity';
import { ProductDto, PaginationOptionsInterface } from '@app/shared';

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

  async get_all(options: PaginationOptionsInterface) {
    //select all from a table
    const query = this.cafeteriaRepository.createQueryBuilder('q').select('q.*');

    const page = options.page - 1;
    const total = await query.getCount();

    const foods = await query
      .offset(page * options.limit)
      .limit(options.limit)
      .orderBy('q.createdAt', 'ASC')
      .getRawMany();

    return {
      foods,
      count: total,
      totalPages: Math.ceil(total / options.limit),
      itemsPerPage: options.limit,
      currentPage: options.page,
    };
  }
}
