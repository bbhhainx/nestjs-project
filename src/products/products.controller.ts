import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDTO } from './product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly appService: ProductsService) {}

  @Get()
  getProducts(): string[] {
    return this.appService.getProducts();
  }

  @Post()
  async createProduct(@Body() product: ProductDTO): Promise<ProductDTO> {
    return product;
  }
}
