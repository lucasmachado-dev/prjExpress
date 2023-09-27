create table clientes(
id int primary key auto_increment, 
nome varchar(50) ,
sobrenome varchar(50) ,
email varchar(120) ,
endereco_rua varchar(100) ,
endereco_numero varchar(50) ,
endereco_complemento varchar(100) ,
endereco_bairro varchar(50) ,
endereco_cidade varchar(50) ,
endereco_estado varchar(2) ,
endereco_cep varchar(10)
)