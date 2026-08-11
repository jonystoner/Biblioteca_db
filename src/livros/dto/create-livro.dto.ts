import { IsBoolean, IsInt, IsNotEmpty, IsString,Max } from "class-validator";

export class CreateLivroDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;
    @IsString()
    @IsNotEmpty()
    auto: string;
    @IsInt()
    @Max(2100, {message: 'O ano deve ser menor ou igual a 2100'})
    ano: number;
    @IsBoolean() 
    disponivel: boolean;
}



