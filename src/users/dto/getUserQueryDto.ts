import { IsOptional, IsString } from "class-validator"

export class GetUserQueryDto {
    @IsOptional()
    @IsString()
    username?: string

    @IsOptional()
    @IsString()
    email?: string
}