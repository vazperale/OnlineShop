import { IsNotEmpty,IsString} from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty({message:"Name is mandatory"})
    @IsString({message:"valor no valido"})
    name: string
}
