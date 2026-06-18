# 🖥️  Atividade Prática 01

Esse é um projeto de desenvolvimento web que inclui as seguintes funcionalidades simples:

1. Tela de login de usuário
2. Tela de cadastro de novo usuário
3. Renderização de uma lista com os nomes dos usuários
4. Armazenamento de dados via localStorage

# 🖥️  Atividade Prática 02

O objetivo é incluir um backend funcional seguindo o modelo API REST <br>
O backend incluí arquivos de rotas, controladores, um server e um prisma <br>
No docker está incluso dois containers: "backend" e a database "db"
A lista agora acessa os dados de usuário registrados na database, permitindo a consulta e exclusão


## Como rodar essa aplicação web

1. Por um terminal de uma IDE, clone esse repositório na sua máquina:

```bash
git clone "https://github.com/rottoni/tecweb-projetos"
```

2. Acesse a pasta do projeto clonado no terminal

3. A aplicação roda em containers de docker. Então abra o programa Docker Desktop e o deixe executando em segundo plano.

4. No terminal do VS Code insira:

```bash
cd backend
docker compose up --build -d
```

5. Confirme se a network de containers "backend" no Docker Desktop está executando

6. Popule o banco de dados com alguns usuários inicias. No mesmo terminal insira:

```bash
docker-compose exec backend npx prisma db seed
```

7. A aplicação irá rodar em http://localhost:3000 , basta copiar o link em um navegador


## Sobre a Lista de Usuários

Os dados de cada conta estavam armazenados no LocalStorage do navegador
Agora os dados estão armazenados no container "db"
Esse container inclui o id, email, nome e senha de cada usuário
Em uma aplicação real, as senhas seriam criptografadas.

Para consultar a database FORA da aplicação, abra um terminal na pasta tecweb-projetos/backend e inserir:

```bash
docker-compose exec backend npx prisma studio
```

## Créditos do grupo

- Rafael Ramos Ottoni de Castro - Matrícula: 2322130069
- André Rodrigo Marques Côrtes  - Matrícula:2322130001