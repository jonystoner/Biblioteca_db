import { IsString,IsInt, IsOptional } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateAtorDTo {
    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: 'Autor testes ',
        description: 'alterar o nome do autor '
    })
    nome?:string;

    @IsOptional()
    @IsString()
    @ApiPropertyOptional({
        example: 'brasileiro',
        description:'altere a nacionalidade'
    })
    nacionalidade?: string

    @IsOptional()
    @IsInt()
    @ApiPropertyOptional({
        example:'1985',
        description: 'altere o ano de nascimeto do autor '
    })
    ano_nacimento?: number

}