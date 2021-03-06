CREATE DATABASE BUSCADOR;

USE BUSCADOR;

CREATE TABLE SERVICO(
	ID INT PRIMARY KEY AUTO_INCREMENT,
	NOME VARCHAR(45) NOT NULL,
	TIPO VARCHAR (30) NOT NULL,
	BAIRRO VARCHAR(35) NOT NULL,
	RUA VARCHAR (40) NOT NULL,
	NUMERO VARCHAR (10) NOT NULL,
	TELEFONE VARCHAR (14) NOT NULL,
	CELULAR VARCHAR (14) NOT NULL,
	EMAIL VARCHAR(45)
	) ENGINE=InnoDB;

INSERT INTO SERVICO (NOME, TIPO, BAIRRO, RUA, NUMERO, TELEFONE, CELULAR, EMAIL) VALUES ("Papa Auto Peças", "Oficina Mecânica", "Junqueira","Santa Catarina", "88", "3265-6598", "(14)99881-1173", "papa-auto@hotmail.com");
INSERT INTO SERVICO (NOME, TIPO, BAIRRO, RUA, NUMERO, TELEFONE, CELULAR, EMAIL) VALUES ("Alice Encanamentos", "Encanador", "Bom Viver","São Paulo", "69", "3265-0000", "(14)99881-1111", "alice_canos@hotmail.com");
INSERT INTO SERVICO (NOME, TIPO, BAIRRO, RUA, NUMERO, TELEFONE, CELULAR, EMAIL) VALUES ("Milena Eletrica", "Eletricista", "Lins V","Rua Nona", "800", "3262-1111", "(14)99888-2222", "milena_raio@gmail.com");
INSERT INTO SERVICO (NOME, TIPO, BAIRRO, RUA, NUMERO, TELEFONE, CELULAR, EMAIL) VALUES ("Cesar da tinta", "Pintor", "Xingu","Av. Carvalho", "123", "3363-4444", "(14)99661-4546", "cesar_pinta@hotmail.com");
INSERT INTO SERVICO (NOME, TIPO, BAIRRO, RUA, NUMERO, TELEFONE, CELULAR, EMAIL) VALUES ("Marcos Construtor", "Pedreiro", "Centro","Novo Horizonte", "852", "4455-6667", "(14)99893-5588", "marcosConstroi@gmail.com");
INSERT INTO SERVICO (NOME, TIPO, BAIRRO, RUA, NUMERO, TELEFONE, CELULAR, EMAIL) VALUES ("Carlos do Portão", "Serralheiro", "Ribeiro","Av. Sampaio", "478", "7778-9900", "(14)99882-1123", "carlosPorta@hotmail.com");