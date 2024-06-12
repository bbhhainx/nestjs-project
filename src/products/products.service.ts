import { Body, Injectable } from '@nestjs/common';
import { ProductDTO } from './product.dto';

@Injectable()
export class ProductsService {
  getProducts(): string[] {
    return ['Sản phẩm 1', 'Sản phẩm 2', 'Sản phẩm 3'];
  }
  async createProduct(@Body() product: ProductDTO) {
    return product;
  }
}
