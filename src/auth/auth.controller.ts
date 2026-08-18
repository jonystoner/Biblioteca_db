import { Controller,Body,Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
@Controller('auth')
export class AuthController {

    constructor (private readonly authService:AuthService){}

    @Post('cadastro')
    cadastrar(
        @Body() createUsuarioDto:CreateUsuarioDto){

            return this.authService.cadastrar(createUsuarioDto)
        }
    
}
