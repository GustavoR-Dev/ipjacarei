-- Criar o banco de dados (se ainda não existir)
CREATE DATABASE IF NOT EXISTS ipjacarei
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_general_ci;

-- Selecionar o banco
USE ipjacarei;

-- Criar a tabela de membros
CREATE TABLE IF NOT EXISTS membros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    telefone VARCHAR(30) NOT NULL,
    idade INT NULL,
    como_conheceu VARCHAR(50) NULL,
    mensagem TEXT NULL,
    newsletter TINYINT(1) DEFAULT 0,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

