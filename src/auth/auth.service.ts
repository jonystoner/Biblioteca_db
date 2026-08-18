import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from 'src/auth/dto/create-usuario.dto';

@Injectable()
export class AuthService {

  constructor(
    private readonly databaseService: DatabaseService
  ) {}

  async cadastrar(createUsuarioDto: CreateUsuarioDto) {

    const { nome, email, senha } = createUsuarioDto;

    const senhaHash = await bcrypt.hash(senha, 10);

    await this.databaseService.query(
      `INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)`,
      [nome, email, senhaHash]
    );

    return {
      mensagem: 'Usuário cadastrado com sucesso'
    };
  }
}