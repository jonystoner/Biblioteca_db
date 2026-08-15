import { IsBoolean, IsInt, IsNotEmpty, IsString,Max } from "class-validator";

import { ApiProperty } from "@nestjs/swagger";

export class CreateLivroDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example:'Dom casmurro',
        description:'titulo do livro'
    })
    titulo: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: 'machado de assis ',
        description:'autor do livro '
    })
    auto: string;
    
    @IsInt()
    @Max(2100, {message: 'O ano deve ser menor ou igual a 2100'})
    @ApiProperty({
        example: '1950',
        description: 'ano de publicação do livro'
    })
    ano: number;
    
    @IsBoolean()
    @ApiProperty({
        example: true,
        description:'Disponibilidade do livro'
    })
    disponivel: boolean;
}



