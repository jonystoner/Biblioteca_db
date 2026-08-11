import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateAutoresDto {
    @IsString()
    @IsNotEmpty()
    nome: string;
    @IsString()
    @IsNotEmpty()
    nacionalidade: string;
    @IsInt()
    @Min(1945, {message: 'O ano deve ser menor ou igual a 2100'})
    ano_nascimento: number;

}



