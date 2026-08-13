import { Controller,Body,Post,Get,Param,ParseIntPipe } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
    constructor (private readonly livroService: LivrosService){}

    @Post()
    criar(@Body() CreateLivroDto:CreateLivroDto){
        return this.livroService.criar(CreateLivroDto);
    }

    @Get()
    listar(){
        return this.livroService.listarTodos();
    }

    @Get(':id')
    buscaPorId(
        @Param('id', ParseIntPipe) id:number
    )
    {
        return this.livroService.buscaPorId(id);
    }
}
