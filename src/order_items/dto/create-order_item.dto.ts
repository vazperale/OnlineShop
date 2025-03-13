import { IsNotEmpty,IsNumber} from "class-validator";

export class CreateOrderItemDto {
    @IsNotEmpty({message:"orderId must have a value"})
    @IsNumber({maxDecimalPlaces:0},{message:"valor orderId no valido"})
    orderId:number

    @IsNotEmpty({message:"productId must have a value"})
    @IsNumber({maxDecimalPlaces:0,},{message:"valor productId no valido"})
    productId:number
    
    @IsNotEmpty({message:"quantity must have a value"})
    @IsNumber({maxDecimalPlaces:0},{message:"valor quantity no valido"})
    quantity:number
    
    @IsNotEmpty({message:"totalPrice must have a value"})
    @IsNumber({maxDecimalPlaces:2},{message:"valor totalPrice no valido"})
    totalPrice:number
    
}
