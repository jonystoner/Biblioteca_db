import { Controller,Body,Post} from '@nestjs/common';
import { CreateAutoresDto } from './dto/create-autor.dto';
import { AutoresService } from './autores.service';


@Controller('autores')
export class AutoresController {
    constructor(private readonly AutoresService: AutoresService) { }

    @Post()
    criar(@Body() CreateAutoresDto: CreateAutoresDto) {
        return this.AutoresService.criar(CreateAutoresDto);
    }
}
