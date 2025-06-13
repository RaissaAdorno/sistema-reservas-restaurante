# Documentação do Backend Xavier

## Introdução

Este projeto é um backend para gerenciamento de reservas de mesas em um restaurante, utilizando Node.js, Express e Prisma ORM para integração com banco de dados relacional (MySQL).

---

## Estrutura do Projeto

- **server.js**: Arquivo principal do servidor, onde estão todas as rotas e regras de negócio.
- **Prisma**: ORM para manipulação do banco de dados.
- **Express**: Framework para criação das rotas HTTP.
- **CORS**: Middleware para permitir requisições de outros domínios.

---

## Passo a Passo do Código

### 1. Importação de Bibliotecas e Inicialização

- O projeto importa e inicializa o Prisma Client, Express e CORS.
- O servidor Express é configurado para aceitar JSON e permitir requisições de outros domínios.

### 2. Função de Teste Inicial

- Ao iniciar, o projeto executa uma função que lista todos os usuários do banco (apenas para teste/desenvolvimento).

### 3. Rotas de Usuários

- **POST `/teste`**: Cria um novo usuário.
- **PUT `/teste/:id`**: Atualiza os dados de um usuário pelo ID.
- **DELETE `/teste/:id`**: Remove um usuário pelo ID.
- **GET `/teste`**: Retorna todos os usuários cadastrados.

### 4. Rotas de Mesas e Reservas

- **GET `/mesas-disponiveis`**: Lista mesas que estão disponíveis (status "Disponivel").
- **GET `/mesas-disponiveis-por-data?data=YYYY-MM-DDTHH:mm`**: Lista mesas disponíveis para um dia específico, ignorando o status da mesa.
- **POST `/reservas`**: Cria uma nova reserva, garantindo que não haja duplicidade para o mesmo dia/mesa.
- **DELETE `/reservas/:id`**: Cancela uma reserva e libera a mesa para novas reservas.
- **PUT `/reservas/:id/confirmar`**: Confirma a presença do cliente e registra o garçom responsável.
- **GET `/reservas-pendentes`**: Mostra todas as reservas que ainda não foram confirmadas.

### 5. Endpoints de Relatório

- **GET `/relatorio/reservas-periodo?inicio=YYYY-MM-DD&fim=YYYY-MM-DD`**: Lista reservas entre duas datas.
- **GET `/relatorio/reservas-mesa/:id_mesa`**: Lista reservas feitas para uma mesa específica.
- **GET `/relatorio/confirmadas-garcom/:nome_garcom`**: Lista reservas confirmadas por um garçom específico.

### 6. Inicialização do Servidor

- O servidor é iniciado na porta 3000.

---

## Observações Finais

- O projeto utiliza o Prisma para manipulação do banco de dados, então é importante configurar o arquivo `.env` com a string de conexão correta.
- As rotas estão divididas por funcionalidades: usuários, mesas, reservas e relatórios.
- O código está preparado para ser facilmente expandido com novas funcionalidades.

---