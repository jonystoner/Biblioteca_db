import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { LivrosModule } from './livros/livros.module';
import { AutoresModule } from './autores/autores.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule,
    LivrosModule,
    AutoresModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
