import { Injectable, NotFoundException } from '@nestjs/common';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

    //Realiza a busca de todos os livros
    async listarTodos(){
       const resultado  = await this.databaseService.query(
        `select * from livro`
       ) 
       return resultado
    };

    //realizar a busca de um livro atraves do id 
    async buscaPorId(id:number) {
        const resultado = await this.databaseService.query (
            `select * from livro where id = ?`, [id]

        ) as RowDataPacket[]
        //o rowdatapacket [] ifnorma ao typescript que o resultado da consulat será tratado como uma lista de registrois retornado pelo banco de dados.

        if (resultado.length === 0 ) {
            throw new  NotFoundException (
                'livro não encontrado'
            )
        }
       return resultado[0]

    }

}

