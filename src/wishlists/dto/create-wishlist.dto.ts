import { Type } from "class-transformer";
import { IsInt } from "class-validator";

export class CreateWishlistDto {
    @IsInt()
    @Type(() => Number) // Convierte el valor de string a number
    userId:number

    @IsInt()
    @Type(() => Number)
    productId:number // Convierte el valor de string a number
    
}
