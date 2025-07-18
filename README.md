# Modelo Padrão de API

Este é um modelo padrão para a criação de APIs utilizando Node.js, Express, TypeScript e Prisma.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **Express**: Framework para a criação de APIs em Node.js.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Prisma**: ORM para Node.js e TypeScript.
- **PostgreSQL**: Banco de dados relacional.

## Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. **Instale as dependências:**
    ```bash
    npm install
    ```
3. **Configure o banco de dados:**
    - Crie um arquivo `.env` na raiz do projeto e adicione a variável de ambiente `DATABASE_URL` com a URL do seu banco de dados PostgreSQL.
    - Exemplo: `DATABASE_URL="postgresql://user:password@host:port/database"`
4. **Execute as migrações do banco de dados:**
    ```bash
    npx prisma migrate dev
    ```
5. **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
O servidor estará disponível em `http://localhost:3000`.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento com `ts-node-dev`.
- `npm run build`: Compila o código TypeScript para JavaScript.
- `npm test`: (Não configurado)

## Estrutura do Projeto

```
.
├── prisma
│   ├── schema.prisma
│   └── migrations
└── src
    ├── app.ts
    ├── server.ts
    ├── config
    ├── controllers
    ├── models
    ├── repositories
    ├── routes
    └── services
```

## Endpoints da API

### Users
- `GET /user`: Retorna todos os usuários.
- `POST /user`: Cria um novo usuário.
- `PUT /user/:id`: Atualiza um usuário existente.
- `DELETE /user/:id`: Deleta um usuário existente.

### Products
- `GET /product`: Retorna todos os produtos.
- `POST /product`: Cria um novo produto.
- `PUT /product/:id`: Atualiza um produto existente.
- `DELETE /product/:id`: Deleta um produto existente.

## Modelos do Banco de Dados

### User

| Campo | Tipo   | Descrição      |
|-------|--------|----------------|
| id    | Int    | ID do usuário  |
| name  | String | Nome do usuário|

### Product

| Campo       | Tipo   | Descrição         |
|-------------|--------|-------------------|
| id          | Int    | ID do produto     |
| description | String | Descrição do produto|
| value       | Float  | Valor do produto  |