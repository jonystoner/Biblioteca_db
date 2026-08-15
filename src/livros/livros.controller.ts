import { Controller,Body,Post,Get,Param,ParseIntPipe } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { LivrosService } from './livros.service';
import { ApiTags,ApiResponse,ApiOperation } from '@nestjs/swagger';

@ApiTags('livros')
@Controller('livros')
export class LivrosController {
    constructor (private readonly livroService: LivrosService){}

    @Post()
    @ApiOperation({
        summary:'Cadatrar um novo livro'
    })

    @ApiResponse({
        status: 201,
        description:'Livro cadastrado com sucesso'
    })
  
    criar(@Body() CreateLivroDto:CreateLivroDto){
        return this.livroService.criar(CreateLivroDto);
    }

    @Get()
 
    @ApiOperation({
        summary:'retorna todos os livros cadastrados'
    })

    @ApiResponse({
        status: 201,
        description:'Busca realizada com sucesso '
    })
    listar(){
        return this.livroService.listarTodos();
    }

    @Get(':id')

     @ApiOperation({
        summary:'localizar livro por id '
    })

    @ApiResponse({
        status: 201,
        description:'Livro econtado com sucesso'
    })
    buscaPorId(
        @Param('id', ParseIntPipe) id:number
    )
    {
        return this.livroService.buscaPorId(id);
    }
}


