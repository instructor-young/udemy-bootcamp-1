import { Controller, Get, Param } from '@nestjs/common';
import { LoggedInOnly } from 'src/decorators/loggedInOnly.decorator';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @LoggedInOnly()
  async findAll() {
    const products = await this.productsService.findAll();

    return products;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }
}
