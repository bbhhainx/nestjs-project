import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class ProductDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  mount: number;
}
