import { Injectable } from '@nestjs/common';
import { ResultSetHeader } from 'mysql2';
import { DatabaseService } from 'src/database/database.service';
import { CreateLivroDto } from './dto/create-livro.dto';

@Injectable()
export class LivrosService {
    constructor (private readonly databaseService: DatabaseService){}
    
    async criar (CreateLivroDto:CreateLivroDto){
        const {titulo,auto,ano,disponivel} = CreateLivroDto

        const sql = `
        insert into livro (titulo,auto,ano,disponivel) values (?,?,?,?) 
        `;

        const resultado = await this.databaseService.query(sql,[
            titulo,auto,ano,disponivel
        ]) as ResultSetHeader
        
        return {
            mensagem: 'livro cadastrdo com sucesso ',
            livro: {    
                id:resultado.insertId,
                titulo,
                auto,
                ano,
                disponivel
            }
        };
    }
}

