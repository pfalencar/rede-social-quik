# rede-social-quik


### Stack utilizada e versão:
* node versão 16.14.0
* npm versão 8.3.1
* MySQL versão 8.0.25
* Postman versão 9.0.8

### Frameworks:
* express
* body-parser
* nodemon
* sequelize
* mysql2

### Motivo da escolha dos framewoks:

__Express__ é uma biblioteca utilizada para subir o servidor local e gerenciar as rotas que estão sendo utilizadas.

__Body-parser__ é uma biblioteca que converte os dados que chegam ao corpo das requisições (body) para JSON

__nodemon__ é uma biblioteca que atualiza o código para não precisar derrubar o servidor a cada nova alteração.

__Sequelize__ é um ORM, mapeador objeto-relacional. Portanto, abstrai os comandos SQL permitindo a aplicação fique mais legível e de melhor manutenibilidade.

__mysql2__ por ser suportado pelo Sequelize.


## Executar o projeto
. Entre na pasta no projeto a partir do terminal e digite:
```bash
  npm run start
```
. Digite as rotas no Postman:
* Para acessar Users: 
http://localhost:3000/users

* Para acessar Posts:
http://localhost:3000/posts

* Para acessar comentários:
http://localhost:3000/users/userId/comments/commentId



