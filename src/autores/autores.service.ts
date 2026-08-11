import { Injectable } from '@nestjs/common';
import { ResultSetHeader } from 'mysql2';
import { DatabaseService } from 'src/database/database.service';
import { CreateAutoresDto } from './dto/create-autor.dto';

@Injectable()
export class AutoresService {
  constructor (private readonly databaseService: DatabaseService){}
    
    async criar (CreateAutoresDto:CreateAutoresDto){
        const {nome,nacionalidade,ano_nascimento} = CreateAutoresDto

        const sql = `
        insert into autores (nome,nacionalidade,ano_nascimento) values (?,?,?) 
        `;

        const resultado = await this.databaseService.query(sql,[
            nome,nacionalidade,ano_nascimento
        ]) as ResultSetHeader
        
        return {
            mensagem: 'livro cadastrdo com sucesso ',
            livro: {    
                id:resultado.insertId,
                nome,
                nacionalidade,
                ano_nascimento,
            }
        };
    }

}
