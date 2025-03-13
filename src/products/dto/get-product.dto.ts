import { IsOptional, IsInt, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class GetProductQueryDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number) // Convierte el valor de string a number
  category_id?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number) // Convierte el valor de string a number
  price?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number) // Convierte el valor de string a number
  take?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number) // Convierte el valor de string a number
  skip?: number;
}
