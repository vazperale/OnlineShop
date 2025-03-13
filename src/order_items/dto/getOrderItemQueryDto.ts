import { Type } from "class-transformer";
import { IsOptional, IsInt } from "class-validator";

export class GetOrderItemQueryDto{
    @IsOptional()
    @IsInt()
    @Type(() => Number) // Convierte el valor de string a number
    orderId:number
}