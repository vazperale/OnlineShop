import { Type } from "class-transformer";
import { IsOptional, IsInt } from "class-validator";

export class GetOrderQueryDto {
    @IsOptional()
    @IsInt()
    @Type(() => Number) // Convierte el valor de string a number
    userId: number
}