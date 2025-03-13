import { IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
        @IsNotEmpty({ message: "username must have a value" })
        @IsString({ message: "valor username no valido" })
        username: string

        @IsNotEmpty({ message: "email must have a value" })
        @IsString({ message: "valor email no valido" })
        email: string

        @IsNotEmpty({ message: "dateBirth must have a value" })
        @IsString({ message: "valor dateBirth no valido" })
        dateBirth: string

        @IsNotEmpty({ message: "address must have a value" })
        @IsString({ message: "valor address no valido" })
        address: string
}
