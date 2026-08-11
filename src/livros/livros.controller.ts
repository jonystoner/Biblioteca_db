import { Controller,Body,Post } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
    constructor (private readonly livroService: LivrosService){}

    @Post()
    criar(@Body() CreateLivroDto:CreateLivroDto){
        return this.livroService.criar(CreateLivroDto);
    }
}
