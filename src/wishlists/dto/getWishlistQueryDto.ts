import { Type } from "class-transformer"
import { IsInt, IsNumber, IsOptional } from "class-validator"

export class GetWishlistQueryDto {
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    userId?: number

    @IsOptional()
    @IsInt()
    @Type(() => Number) productId?: number
}