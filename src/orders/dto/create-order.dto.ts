import { IsNotEmpty, IsNumber } from "class-validator"

export class CreateOrderDto {
    @IsNotEmpty({ message: "orderId must have a value" })
    @IsNumber({ maxDecimalPlaces: 0 }, { message: "valor orderId no valido" })
    totalAmount: number

    @IsNotEmpty({ message: "orderId must have a value" })
    @IsNumber({ maxDecimalPlaces: 0 }, { message: "valor orderId no valido" })
    userId: number
}
