import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateProductDto {
    @IsNotEmpty({ message: "name must have a value" })
    @IsString({ message: "valor name no valido" })
    name: string

    @IsNotEmpty({ message: "image must have a value" })
    @IsString({ message: "valor image no valido" })
    image: string

    @IsNotEmpty({ message: "price must have a value" })
    @IsNumber({ maxDecimalPlaces: 2 }, { message: "valor price no valido" })
    price: number

    @IsNotEmpty({ message: "stock must have a value" })
    @IsNumber({ maxDecimalPlaces: 0 }, { message: "valor stock no valido" })
    stock: number

    @IsNotEmpty({ message: "categoryId must have a value" })
    @IsNumber({ maxDecimalPlaces: 0 }, { message: "valor categoryId no valido" })
    categoryId: number
}
