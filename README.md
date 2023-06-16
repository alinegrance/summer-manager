# Summer Manager

Monitoria estruturada de operações de **CRUD** criando uma API com Node.js.

### Executando a aplicação

Para realizar essa atividade, inicie fazendo o clone deste repositório usando o comando abaixo.

    git clone git@github.com:alinegrance/summer-manager.git

Instale as dependências do projeto.

    npm install

Inicie a aplicação com o nodemon.

    npm start

**Obs.:** Caso queira salvar sua resolução no seu GitHub faça o `Fork` deste repositório antes de realizar o clone e substitua no primeiro comando a chave SSH que agora deve ser a do seu repositório.

## 📚 Exercitando

### 1 - Crie um endpoint para acessar todos os summers.

- O endpoint deve ser acessíve através da rota `/`.

A requisição deve retornar o status `200` e um array com todos os summers cadastrados. Caso não haja nenhum, deve retornar um array vazio.

### 2 - Crie um endpoint para cadastrar um summer novo.

- O endpoint deve ser acessíve através da rota `/`.
<details>
  <summary>O body da requisição deve ser da seguinte forma</summary>

      {
        "name": "Aline Grance",
        "age": 31,
        "pets": {"dog": "Chocolate", "cat": "Pudim"}
     }

</details>

A requisição deve retornar o status `201` e os dados do novo summer que foi inserido.

<details>
  <summary>O retorno esperado</summary>

     {
        "id": 1,
        "name": "Aline Grance",
        "age": 31,
        "pets": {"dog": "Chocolate", "cat": "Pudim"}
     }

</details>

### 3 - Crie um endpoint para atualizar um summer.

- O endpoint deve ser acessíve através da rota `/:id`.

A idade da summer Aline está errada. A idade certa é 25 e os outros dados do cadastro estão corretos.

<details>
  <summary>O body da requisição deve ser da seguinte forma</summary>

      {
        "name": "Aline Grance",
        "age": 25,
        "pets": {"dog": "Chocolate", "cat": "Pudim"}
     }

</details>

- A resposta da requisição deve retornar o status `200` e as informações do livro que foram editadas.

<details>
  <summary>O retorno esperado</summary>

     {
        "id": 1,
        "name": "Aline Grance",
        "age": 25,
        "pets": {"dog": "Chocolate", "cat": "Pudim"}
     }


</details>

### 4 - Crie um enpoint para deletar um summer.

- O endpoint deve ser acessíve através da rota `/:id`.
- A summer Aline se formou (Yay!) e agora não faz mais parte da equipe de Summers (Ahh :'( )
- O retorno da requisição deve ser um status `204` sem mensagem de resposta.

### 5 - Crie um endpoint que permita pesquisar um Summer pelo nome.

- O endpoint deve ser acessíve através da rota `/search?q=searchTerm`.

Ao pesquisar pela rota `/search?author=lin` deve retornar o status `200` e um array com todos os summers que satisfaçam a pesquisa.

<details>
  <summary>O retorno esperado para a pesquisa por "ge"</summary>

     [
       {
          "id": 1,
          "name": "Aline Grance",
          "age": 31,
          "pets": {"dog": "Chocolate", "cat": "Pudim"}
       }
     ]

</details>

## Bônus

### 6 - Crie os middlewares de validação para as rotas dos exercícios anteriores.

  Para as operações de `PUT`e `POST`, onde o usuário fornece dados no body da requisição, faça a validação destes dados utilizando middlewares.

  Caso algum campo esteja faltando retorne o status `400` com o seguinte modelo de mensagem.

        {
          message: "O campo \"nome-do-campo-aqui\" é obrigatório"
        }


## Resolução

Para verificar uma proposta de solução aos exercícios acima entre na branch `solved-exercises` utilizando o comando abaixo.

        git checkout solved-exercises


  ---

Desenvolvido por [Aline Grance](https://www.linkedin.com/in/alinegrance/), © 2022.
