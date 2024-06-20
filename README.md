# Projeto: Alura Docs - Comunicação em Tempo Real com WebSockets, Socket.IO e MongoDB - Alura Course Overview 

## Índice

1. [Criando o Alura Docs](#1-criando-o-alura-docs)
2. [Trabalhando com Socket.IO](#2-trabalhando-com-socketio)
3. [Avançando na Comunicação](#3-avançando-na-comunicação)
4. [Utilizando o MongoDB](#4-utilizando-o-mongodb)
5. [Avançando no Alura Docs](#5-avançando-no-aluradocs)
6. [Instalações npm](#6-instalações-npm)
7. [Estrutura do Projeto](#7-estrutura-do-projeto)

## Tecnologias Envolvidas
<div style="display: inline_block">
  <img align="center" alt="NodeJS" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
   <img align="center" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
   <img align="center" alt="ExpressJS" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
   </br>
   </br>
   <img align="center" alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
   <img align="center" alt="Eslint" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/>
</div>

## 1. Criando o Alura Docs

Nesta etapa inicial, focamos em entender as diferenças entre os protocolos HTTP e WebSockets, além de configurar a base do nosso projeto:

- **HTTP vs WebSockets**: Compreendemos que o protocolo HTTP trabalha com o modelo de requisição-resposta, enquanto o WebSockets permite uma comunicação bidirecional em tempo real.
- **Servidor Socket.IO com Express**: Configuramos o servidor utilizando Express e estabelecemos a conexão com os clientes.
- **Escutando Eventos de Conexão**: Implementamos o método `io.on("connection")` para detectar quando um cliente se conecta ao servidor.

## 2. Trabalhando com Socket.IO

Na segunda etapa, avançamos na comunicação entre o cliente e o servidor utilizando eventos do Socket.IO:

- **Emitir Eventos do Cliente**: Implementamos `socket.emit("texto_editor")` para enviar eventos do front-end ao servidor.
- **Emitir Eventos para Vários Clientes**: Utilizamos `io.emit()` para enviar eventos a todos os clientes conectados e `socket.broadcast.emit()` para enviar eventos a todos os clientes, exceto o emissor.
- **Organização de Arquivos**: Estruturamos nosso projeto separando as responsabilidades entre manipulações de HTML e funções do Socket.IO.

## 3. Avançando na Comunicação

Nesta etapa, exploramos funcionalidades avançadas do Socket.IO para melhorar a comunicação em tempo real:

- **Salas no Socket.IO**: Agrupamos clientes em salas usando `join()` e emitimos eventos específicos para essas salas com `to()`.
- **Reconhecimento de Dados**: Implementamos callbacks no `emit()` para imitar requisições-resposta, garantindo que o servidor possa enviar feedback ao cliente.

## 4. Utilizando o MongoDB

Na quarta etapa, integramos nosso projeto com o MongoDB para armazenar e gerenciar dados persistentes:

- **Banco de Dados com Alura Docs**: Configuramos uma conexão com o banco de dados MongoDB local e gerenciamos os dados utilizando o MongoDB Compass.
- **Obter Dados do Banco**: Utilizamos `findOne()` para buscar documentos específicos no banco de dados.
- **Alterar Dados no Banco**: Implementamos `updateOne()` para editar documentos e refletir alterações no banco de dados em tempo real.

## 5. Avançando no AluraDocs

Finalmente, aprimoramos ainda mais nossa aplicação Alura Docs com funcionalidades adicionais:

- **Obter Todos os Documentos**: Utilizamos o método `find()` do mongoose para trazer todos os documentos em um array.
- **Adicionar Documentos**: Verificamos a existência de documentos e utilizamos `create()` para adicionar novos documentos, fornecendo feedback ao front-end.
- **Excluir Documentos**: Implementamos `findOneAndDelete()` para remover documentos do banco de dados e emitimos eventos para atualizar a interface dos clientes conforme necessário.
- **Atualizar Páginas Dinamicamente**: Configuramos a interface para redirecionar ou atualizar dinamicamente conforme os eventos de exclusão ocorrem.

## 6. Instalações npm

`npm init`

`npm install express`

`npm init @eslint/config`

`npm install nodemon -D`

`npm install socket.io`

`npm install mongoose` 

`npm install mongodb`

## 7. Estrutura do Projeto
```
📦curso-nodejs-websockets
 ┣ 📂public
 ┃ ┣ 📜documento.html
 ┃ ┣ 📜documento.js
 ┃ ┣ 📜index.html
 ┃ ┣ 📜index.js
 ┃ ┣ 📜socket-front.js
 ┃ ┗ 📜socket-index.js
 ┣ 📂src
 ┃ ┣ 📂db
 ┃ ┃ ┗ 📜db.js
 ┃ ┣ 📂models
 ┃ ┃ ┗ 📜Documento.js
 ┃ ┣ 📜servidor.js
 ┃ ┗ 📜socket-back.js
 ┣ 📜.editorconfig
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
```