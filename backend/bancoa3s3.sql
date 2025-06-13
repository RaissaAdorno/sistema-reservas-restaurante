-- CRIANDO O BANCO DE DADOS
CREATE DATABASE bancoa3s3
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;


use bancoa3s3;

-- CRIANDO TABELA USUARIOS
CREATE TABLE tab_usuarios(
id_usuario int AUTO_INCREMENT,
usuario varchar(20),
login varchar(20),
senha varchar(20),
PRIMARY KEY(id_usuario)
) DEFAULT CHARSET = utf8;

desc tab_usuarios;

-- INSERINDO DADOS NA TABELA USUARIOS

Insert into tab_usuarios (usuario, login, senha)
values
("Atendente","Junior","123"),
("Garçom","Tadeu","456"),
("Gerente","Felca","789");

select * from tab_usuarios;

-- CRIANDO TABELA MESAS
CREATE TABLE tab_mesas (
id_mesa INT AUTO_INCREMENT,
numero_mesa INT UNIQUE,
status ENUM(
'Disponível', 
'Reservada') NOT NULL DEFAULT 'Disponível',
PRIMARY KEY (id_mesa)
) DEFAULT CHARSET = utf8;

-- INSERINDO DADOS NA TAB MESA
INSERT INTO tab_mesas 
VALUES
(DEFAULT, 1, DEFAULT),
(DEFAULT, 2, DEFAULT),
(DEFAULT, 3, DEFAULT),
(DEFAULT, 4, DEFAULT),
(DEFAULT, 5, DEFAULT),
(DEFAULT, 6, DEFAULT),
(DEFAULT, 7, DEFAULT),
(DEFAULT, 8, DEFAULT),
(DEFAULT, 9, DEFAULT),
(DEFAULT, 10, DEFAULT);


-- CRIANDO TABELA RESERVA

CREATE TABLE tab_reservas(
id_reservas int AUTO_INCREMENT,
nome_cliente varchar (50),
id_mesa int,
quantidade_pessoas int,
-- data_reserva date,
-- hora_reserva time,
data_hora_reserva datetime,
status ENUM(
'Pendente', -- só pode aparecer mesas pendentes para o garçom, o garçom pode cancelar reserva
'Confirmado', -- garçom envia pro banco
'Cancelado' --  //
) NOT NULL DEFAULT 'Pendente',
garcom varchar(20) DEFAULT NULL, -- garçom que fez a reserva
PRIMARY KEY (id_reservas),
FOREIGN KEY (id_mesa) REFERENCES tab_mesas(id_mesa)
) DEFAULT CHARSET = utf8;


desc tab_reservas;

-- SELECT * FROM WHERE mesa =? Status = comfirmadas 

-- INSERINDO DADOS NA TABELA RESERVAS

-- comando do atendente seria um insert indo, mas deixando o status como default(default é 'Pendente')

INSERT INTO tab_reservas
Values
(DEFAULT,"Ana Souza", "1", "2", "2025-05-20 19:30:00", "Pendente"),
(DEFAULT,"Carlos Lima", "2", "4", "2025-05-21 20:00:00", "Confirmado"),
(DEFAULT,"Beatriz Torres", "3", "3", "2025-05-19 18:45:00", "Cancelado"),
(DEFAULT, "Juliana Mendes", "4", "2", "2025-05-21 19:00:00", "Pendente"),
(DEFAULT, "Rafael Costa", "6", "5", "2025-05-21 20:30:00", "Pendente"),
(DEFAULT, "Marina Oliveira", "7", "3", "2025-05-22 18:45:00", "Pendente");

select * from tab_reservas;


-- CRIANDO TABELA RELATÓRIO
CREATE TABLE tab_relatorio(
id_relatorio int AUTO_INCREMENT,
id_reservas int,
PRIMARY KEY (id_relatorio),
FOREIGN KEY (id_reservas) REFERENCES tab_reservas(id_reservas)
) DEFAULT CHARSET = utf8;

INSERT INTO tab_relatorio
VALUES
(DEFAULT,"7"),
(DEFAULT,"8"),
(DEFAULT,"9"),
(DEFAULT,"10"),
(DEFAULT,"11"),
(DEFAULT,"12");

desc tab_relatorio;








