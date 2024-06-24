# Projeto: Alura Docs - Comunicação em Tempo Real com WebSockets, Socket.IO e MongoDB - Alura Course Overview 

## Índice

1. [Criando o Alura Docs](#1-criando-o-alura-docs)
2. [Trabalhando com Socket.IO](#2-trabalhando-com-socketio)
3. [Avançando na Comunicação](#3-avançando-na-comunicação)
4. [Utilizando o MongoDB](#4-utilizando-o-mongodb)
5. [Avançando no Alura Docs](#5-avançando-no-aluradocs)
6. [Instalações npm](#6-instalações-npm)
7. [Implementando o Login](#7-implementando-o-login)
8. [Controlando Acessos](#8-controlando-acessos)
9. [Usuários Online](#9-usuários-online)
10. [Finalizando a Aplicação](#10-finalizando-a-aplicação)
11. [Instalações npm](#11-instalações-npm)
12. [Estrutura do Projeto](#12-estrutura-do-projeto)

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

Nesta etapa inicial, foco em entender as diferenças entre os protocolos HTTP e WebSockets, além de configurar a base do projeto:

- **HTTP vs WebSockets**: Compreendo que o protocolo HTTP trabalha com o modelo de requisição-resposta, enquanto o WebSockets permite uma comunicação bidirecional em tempo real.
- **Servidor Socket.IO com Express**: Configuro o servidor utilizando Express e estabeleço a conexão com os clientes.
- **Escutando Eventos de Conexão**: Implemento o método `io.on("connection")` para detectar quando um cliente se conecta ao servidor.

## 2. Trabalhando com Socket.IO

Na segunda etapa, avanço na comunicação entre o cliente e o servidor utilizando eventos do Socket.IO:

- **Emitir Eventos do Cliente**: Implemento `socket.emit("texto_editor")` para enviar eventos do front-end ao servidor.
- **Emitir Eventos para Vários Clientes**: Utilizo `io.emit()` para enviar eventos a todos os clientes conectados e `socket.broadcast.emit()` para enviar eventos a todos os clientes, exceto o emissor.
- **Organização de Arquivos**: Estruturo o projeto separando as responsabilidades entre manipulações de HTML e funções do Socket.IO.

## 3. Avançando na Comunicação

Nesta etapa, exploro funcionalidades avançadas do Socket.IO para melhorar a comunicação em tempo real:

- **Salas no Socket.IO**: Agrupo clientes em salas usando `join()` e emito eventos específicos para essas salas com `to()`.
- **Reconhecimento de Dados**: Implemento callbacks no `emit()` para imitar requisições-resposta, garantindo que o servidor possa enviar feedback ao cliente.

## 4. Utilizando o MongoDB

Na quarta etapa, integro o projeto com o MongoDB para armazenar e gerenciar dados persistentes:

- **Banco de Dados com Alura Docs**: Configuro uma conexão com o banco de dados MongoDB local e gerencio os dados utilizando o MongoDB Compass.
- **Obter Dados do Banco**: Utilizo `findOne()` para buscar documentos específicos no banco de dados.
- **Alterar Dados no Banco**: Implemento `updateOne()` para editar documentos e refletir alterações no banco de dados em tempo real.

## 5. Avançando no AluraDocs

Finalmente, aprimoro ainda mais a aplicação Alura Docs com funcionalidades adicionais:

- **Obter Todos os Documentos**: Utilizo o método `find()` do mongoose para trazer todos os documentos em um array.
- **Adicionar Documentos**: Verifico a existência de documentos e utilizo `create()` para adicionar novos documentos, fornecendo feedback ao front-end.
- **Excluir Documentos**: Implemento `findOneAndDelete()` para remover documentos do banco de dados e emito eventos para atualizar a interface dos clientes conforme necessário.
- **Atualizar Páginas Dinamicamente**: Configuro a interface para redirecionar ou atualizar dinamicamente conforme os eventos de exclusão ocorrem.

## Etapa 06: Cadastrando Usuários
- **Cadastro de Usuários**: Implemento o sistema de usuários no Alura Docs, capturando nome e senha do formulário e salvando no banco de dados.
- **Proteção de Senhas**: Utilizo o módulo `crypto` do Node.js para criptografar senhas com `randomBytes` e `scryptSync`, armazenando a hash e o sal no banco de dados para autenticações futuras.

## Etapa 07: Implementando o Login
- **Autenticação de Usuários**: Verifico a senha digitada no formulário de login comparando com a hash e o sal armazenados no banco de dados.
- **Geração de JWT**: Crio um JSON Web Token para usuários autenticados, que serve como crachá para acessar áreas restritas sem precisar fornecer usuário e senha repetidamente.

## Etapa 08: Controlando Acessos
- **Armazenamento de JWT em Cookies**: Envio o token JWT para o cliente e o armazeno nos cookies do navegador para acessos futuros a áreas restritas.
- **Middlewares no Servidor**: Implemento middlewares para verificar a autenticidade de usuários em áreas restritas e registro middlewares em namespaces específicos.
- **Namespaces no Socket.IO**: Agrupo conexões em namespaces, cada um com seus próprios eventos, salas e middlewares, permitindo controle refinado de acesso e funcionalidades.

## Etapa 09: Usuários Online
- **Retorno do Payload do Token**: Decodifico o token JWT e envio o payload de volta ao cliente, permitindo usar informações como o nome do usuário no front-end.
- **Registro de Conexões de Documentos**: Mantenho uma lista local de usuários conectados a documentos específicos e atualizo a interface no front-end com essas informações.

## Etapa 10: Finalizando a Aplicação
- **Saída de Usuários de Documentos**: Removo a conexão correspondente da lista local quando um usuário sai de um documento, atualizando a interface com a lista atualizada de usuários conectados.
- **Armazenamento em `socket.data`**: Utilizo a propriedade `socket.data` para vincular e recuperar informações associadas a um socket conforme necessário.


## 11. Instalações npm

`npm init`

`npm install express`

`npm init @eslint/config`

`npm install nodemon -D`

`npm install socket.io`

`npm install mongoose` 

`npm install mongodb`

`npm install jsonwebtoken`

`npm install dotenv`

## 12. Estrutura do Projeto
```
📦curso-nodejs-websockets
 ┣ 📂public
 ┃ ┣ 📂cadastro
 ┃ ┃ ┣ 📜cadastro.js
 ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┗ 📜socket-cadastro.js
 ┃ ┣ 📂documento
 ┃ ┃ ┣ 📜documento.html
 ┃ ┃ ┣ 📜documento.js
 ┃ ┃ ┗ 📜socket-documento.js
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┣ 📜login.js
 ┃ ┃ ┗ 📜socket-login.js
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜cookies.js
 ┃ ┣ 📜index.html
 ┃ ┣ 📜index.js
 ┃ ┗ 📜socket-index.js
 ┣ 📂server
 ┃ ┣ 📂controller
 ┃ ┃ ┣ 📜documentoController.js
 ┃ ┃ ┗ 📜usuarioController.js
 ┃ ┣ 📂db
 ┃ ┃ ┗ 📜db.js
 ┃ ┣ 📂event
 ┃ ┃ ┣ 📜cadastro.js
 ┃ ┃ ┣ 📜documentos.js
 ┃ ┃ ┣ 📜inicio.js
 ┃ ┃ ┗ 📜login.js
 ┃ ┣ 📂middlewares
 ┃ ┃ ┗ 📜autorizarUsuario.js
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜Documento.js
 ┃ ┃ ┗ 📜Usuario.js
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜autenticarUsuario.js
 ┃ ┃ ┣ 📜conexoesDocumentos.js
 ┃ ┃ ┣ 📜criaHashESalSenha.js
 ┃ ┃ ┗ 📜gerarJWT.js
 ┃ ┣ 📜servidor.js
 ┃ ┗ 📜socket-back.js
 ┣ 📜.editorconfig
 ┣ 📜.env
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.package-lock
 ┣ 📜package.json
 ┗ 📜README.md
```

