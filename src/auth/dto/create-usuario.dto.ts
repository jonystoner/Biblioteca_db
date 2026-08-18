import { IsString,IsNotEmpty,IsEmail } from "class-validator";

export class CreateUsuarioDto {

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    email: String;

    @IsString()
    @IsNotEmpty()
    senha: string;

}