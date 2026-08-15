import { Controller,Body,Post,Get,Put,Delete, ParseIntPipe, Param} from '@nestjs/common';
import { CreateAutoresDto } from './dto/create-autor.dto';
import { AutoresService } from './autores.service';


@Controller('autores')
export class AutoresController {
    constructor(private readonly AutoresService: AutoresService) { }

    @Post()
    criar(@Body() CreateAutoresDto: CreateAutoresDto) {
        return this.AutoresService.criar(CreateAutoresDto);
    }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.AutoresService.buscarPorId(id);
  }
}
