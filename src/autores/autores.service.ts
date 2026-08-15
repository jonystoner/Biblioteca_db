import { Injectable, NotFoundException } from '@nestjs/common';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { DatabaseService } from 'src/database/database.service';
import { CreateAutoresDto } from './dto/create-autor.dto';
import { UpdateAtorDTo } from './dto/update-autores.dto';

@Injectable()
export class AutoresService {
  constructor(private readonly databaseService: DatabaseService) {}

  async criar(createAutoresDto: CreateAutoresDto) {
    const { nome, nacionalidade, ano_nascimento } = createAutoresDto;

    const sql = `
      INSERT INTO autores (nome, nacionalidade, ano_nascimento) VALUES (?, ?, ?)
    `;

    const resultado = (await this.databaseService.query(sql, [
      nome,
      nacionalidade,
      ano_nascimento,
    ])) as ResultSetHeader;

    return {
      mensagem: 'Autor cadastrado com sucesso',
      autor: {
        id: resultado.insertId,
        nome,
        nacionalidade,
        ano_nascimento,
      },
    };
  }

async buscarPorId(id: number): Promise<UpdateAtorDTo> {
  const autores = await this.databaseService.query(
    'SELECT * FROM autores WHERE id_autores = ?',
    [id],
  ) as RowDataPacket[]

  if (!autores[0]) {
    throw new NotFoundException(`Autor com id ${id} não encontrado`);
  }

  return autores[0] as UpdateAtorDTo;
}


  async update(id: number, dados: UpdateAtorDTo) {
    await this.buscarPorId(id);

    await this.databaseService.query(
      `
      UPDATE autores SET nome = ?, nacionalidade = ?, ano_nascimento = ? WHERE id = ?
      `,
      [dados.nome, dados.nacionalidade, dados.ano_nacimento, id],
    );

    return {
      mensagem: 'Autor atualizado com sucesso',
    };
  }

  async remover(id: number) {
    await this.buscarPorId(id);

    await this.databaseService.query('DELETE FROM autores WHERE id = ?', [id]);

    return {
      mensagem: 'Autor removido com sucesso',
    };
  }
}