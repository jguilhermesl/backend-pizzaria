# Rotas do App Pizzaria

>  BackEnd do App Pizzaria!

## :page_facing_up: Funcionalidades

> Services e Controllers da aplicação.

### User
- **AuthUser:** 
- **CreateUser:**
- **DetailUser:**

### Category
- **CreateCategory:**
- **GetCategories:**
### Product
- **CreateProduct:**
- **GetByCategory:**
### Item 
- **AddItemAtOrder:**
- **DeleteItemAtOrder:**

### Order
- **CreateOrder:**
- **DeleteOrder:**
- **GetOrders:**
- **GetOrderById:**

## :dart: Etapas ##

O projeto está em desenvolvimento.

- [x] Instalando algumas dependências essenciais
- [x] Estrutura de pastas 
- [x] Conexão do prisma com o banco de dados
- [x] Criando primeiro controller e primeiro service
- [x] Rota para cadastrar usuário no banco de dados
- [x] Rota para logar usuário no banco de dados
- [x] Rota para pegar as informações do usuário logado
- [x] Gerando token JWT
- [x] Rotas para criar e listar categorias
- [x] Rotas para criar e listar produtos de uma categoria específica
- [x] Rotas para criar e deletar pedidos
- [x] Rotas para adicionar e remover itens em um pedidos
- [x] Rota para listar todos os pedidos que não estão em rascunho 
- [x] Rota para oder acessar todos detalhes de uma mesa com pedidos dela 
- [x] Rota para concluir o pedido

## :rocket: Tecnologias ##

No projeto foram utilizadas as seguintes tecnologias:

- [NodeJs](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

## :closed_book: Requisitos ##

Antes de iniciar :checkered_flag:, você precisa ter [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/jguilhermesl/backend-pizzaria
# Access
$ cd backend-pizzaria
# Install dependencies
$ yarn or npm 
# Run the project
$ yarn dev or npm run dev 
# The server will initialize in the <http://localhost:3333>
```
## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEEieIa-_h22g/profile-displayphoto-shrink_800_800/0/1651164045663?e=1658966400&v=beta&t=20osuQdvJ8V16r834e0NxcSHYMEE_1t-okD5LF-wATw" width="160px;" alt="Foto do João Guilherme Lima"/><br>
          <sub>
            <b>João Guilherme</b>
          </sub>
        </a>
      </td>
  </tr>
</table>

<a href="#top">Volte para o topo</a>