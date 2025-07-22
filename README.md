# Modelo Padrão de API

Este é um modelo padrão para a criação de APIs robustas e seguras utilizando Node.js, Express, TypeScript e Prisma.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **Express**: Framework minimalista e flexível para a criação de APIs web em Node.js.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, melhorando a manutenibilidade e a detecção de erros.
- **Prisma**: ORM (Object-Relational Mapper) moderno e de próxima geração para Node.js e TypeScript, facilitando a interação com o banco de dados.
- **PostgreSQL**: Banco de dados relacional robusto e de código aberto.
- **bcrypt**: Biblioteca para hashing de senhas, garantindo o armazenamento seguro das credenciais dos usuários.
- **jsonwebtoken (JWT)**: Implementação de JSON Web Tokens para autenticação e autorização de usuários.

## Como Executar

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Configure o banco de dados:**
    - Crie um arquivo `.env` na raiz do projeto (se ainda não existir) e adicione a variável de ambiente `DATABASE_URL` com a URL do seu banco de dados PostgreSQL.
    - Exemplo: `DATABASE_URL="postgresql://user:password@host:port/database"`
    - Certifique-se de que o banco de dados PostgreSQL esteja em execução e acessível.
4.  **Execute as migrações do banco de dados:**
    ```bash
    npx prisma migrate dev
    ```
    Este comando aplicará as migrações pendentes e criará as tabelas necessárias no seu banco de dados.
5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O servidor estará disponível em `http://localhost:3000`.

## Scripts Disponíveis

-   `npm run dev`: Inicia o servidor de desenvolvimento com `ts-node-dev`, que recompila e reinicia o servidor automaticamente a cada alteração de arquivo.
-   `npm run build`: Compila o código TypeScript para JavaScript, gerando os arquivos de saída na pasta `dist`.
-   `npm test`: (Não configurado) - Placeholder para futuros testes unitários e de integração.

## Estrutura do Projeto

```
.
├── prisma/                 # Definições do esquema do banco de dados e migrações
│   ├── schema.prisma
│   └── migrations/
├── src/                    # Código fonte da aplicação
│   ├── app.ts              # Configuração principal do Express
│   ├── server.ts           # Ponto de entrada do servidor
│   ├── @types/             # Definições de tipos personalizadas
│   ├── config/             # Configurações da aplicação (env, prisma client)
│   ├── controllers/        # Lógica de negócio para cada rota
│   ├── middlewares/        # Funções intermediárias (autenticação, validação)
│   ├── models/             # Definições de modelos de dados (não diretamente do Prisma)
│   ├── repositories/       # Camada de acesso a dados (interage com o Prisma Client)
│   ├── routes/             # Definição das rotas da API
│   └── services/           # Lógica de negócio principal, utilizada pelos controllers
```

## Endpoints da API

A API oferece os seguintes endpoints:

### Autenticação

-   `POST /login`: Autentica um usuário e retorna um JSON Web Token (JWT) para acesso a rotas protegidas.

### Usuários (Requer Autenticação para algumas rotas)

-   `GET /user`: Retorna todos os usuários.
-   `GET /user/:id`: Retorna um usuário específico pelo ID.
-   `POST /user`: Cria um novo usuário.
-   `PUT /user/:id`: **(Protegida por JWT)** Atualiza um usuário existente.
-   `DELETE /user/:id`: **(Protegida por JWT)** Deleta um usuário existente.

### Produtos

-   `GET /product`: Retorna todos os produtos.
-   `GET /product/:id`: Retorna um produto específico pelo ID.
-   `POST /product`: Cria um novo produto.
-   `PUT /product/:id`: Atualiza um produto existente.
-   `DELETE /product/:id`: Deleta um produto existente.

### Vendas

-   `GET /sales`: Retorna todas as vendas.
-   `GET /sales/:id`: Retorna uma venda específica pelo ID.
-   `POST /sales`: Cria uma nova venda.

## Modelos do Banco de Dados

### User

| Campo    | Tipo     | Descrição                               |
| :------- | :------- | :-------------------------------------- |
| `id`     | `Int`    | ID único do usuário                     |
| `name`   | `String` | Nome de usuário (único)                 |
| `password` | `String` | Senha do usuário (hash bcrypt)          |

### Product

| Campo       | Tipo     | Descrição                               |
| :---------- | :------- | :-------------------------------------- |
| `id`        | `Int`    | ID único do produto                     |
| `description` | `String` | Descrição detalhada do produto          |
| `value`     | `Float`  | Valor monetário do produto              |

### Sale

| Campo       | Tipo     | Descrição                               |
| :---------- | :------- | :-------------------------------------- |
| `id`        | `Int`    | ID único da venda                       |
| `productId` | `Int`    | ID do produto vendido (chave estrangeira)|
| `userId`    | `Int`    | ID do usuário que realizou a venda (chave estrangeira)|
| `quantity`  | `Int`    | Quantidade do produto vendido           |
| `totalValue`| `Float`  | Valor total da venda                    |
| `saleDate`  | `DateTime`| Data e hora da venda                   |

## Segurança

-   **Hashing de Senhas**: As senhas dos usuários são armazenadas de forma segura utilizando o algoritmo `bcrypt`, garantindo que as senhas nunca sejam armazenadas em texto simples.
-   **Autenticação JWT**: A API utiliza JSON Web Tokens (JWT) para autenticar e autorizar o acesso a rotas protegidas. Após o login, um token é emitido e deve ser incluído no cabeçalho `Authorization` (como `Bearer <token>`) para acessar endpoints restritos. O middleware `validateJwtToken.ts` é responsável por verificar a validade desses tokens.
