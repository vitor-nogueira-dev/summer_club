-- Excluindo o database 
DROP DATABASE IF EXISTS summer_club;

-- Criando o database
CREATE DATABASE summer_club;

-- Usando o banco summer_club
USE summer_club;

-- Excluindo a tabela partner se ela já existir
DROP TABLE IF EXISTS partners;

-- Criando a tabela partner
CREATE TABLE IF NOT EXISTS partners (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    matricula VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    frequent BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

-- Adicioanndo valores a tabela partner
INSERT INTO
    partners (name, age, matricula, email, frequent)
VALUES
    (
        'Rafaella Gomes',
        25,
        "12345678",
        'rafa_gomes@gmail.com',
        true
    ),
    (
        'João Silva',
        30,
        "76543218",
        'joao_silva@gmail.com',
        false
    ),
    (
        'Julia Souza',
        22,
        "98765438",
        'juliasantos123@yahoo.com',
        true
    ),
    (
        'José Pereira',
        40,
        "55544478",
        'josepereira@gmail.com',
        false
    );