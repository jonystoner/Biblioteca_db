import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //tudo que for colocar na main tem que ser antes da porta 
  // ativa a validção dos DTOS em toda a aplicação 
  app.useGlobalPipes(
    new ValidationPipe({
      //remove a propuaedade que não existe no DTO
      whitelist: true,
      //retorna o erro quando uma propriedade desconhecida é enviada 
      forbidNonWhitelisted: true,
      // tenta transforma os valores recebidos 
      // para os tipos esperados pela aplicação 
      transform: true,
    })
  )

  const config = new DocumentBuilder()
  .setTitle('Api Biblioteca')
  .setDescription('Api para gerenciamento da biblioteca')
  .setVersion('1.0')
  .build()

  const documento = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api_biblioteca',app,documento)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
