create database biblioteca_db;
use biblioteca_db;

create table livro (
	id int auto_increment primary key,
    titulo varchar(150) not null,
    auto varchar(100) not null,
    ano int not null,
    disponivel boolean not null default true 
);

CREATE TABLE autores (
    id_autores INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    nacionalidade VARCHAR(150) NOT NULL,
    ano_nascimento INT NOT NULL
);


create table usuario (
	id_usuario int auto_increment primary key,
    nome varchar(150) not null,
    email varchar(150) not null unique,
    senha varchar(255) not null 
);