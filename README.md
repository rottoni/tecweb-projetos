# 🖥️  Atividade Prática 01

Esse é um projeto de desenvolvimento Web simples que inclui as seguintes funcionalidades:

1. Tela de login de usuário
2. Tela de cadastro de novo usuário
3. Renderização de uma lista com os nomes dos usuários
4. Armazenamento de dados via localStorage

# 🖥️  Atividade Prática 02

O objetivo é incluir um backend funcional seguindo o modelo API REST
O backend incluí arquivos de rotas, controladores, um server e um prisma
No docker está incluso dois containers: "backend" e a database "db"

DESCRIÇÃO DA API
---

## Como rodar essa aplicação web

1. Por um terminal, clone esse repositório na sua máquina:
    git clone "https://github.com/rottoni/tecweb-projetos"

2. Acesse a pasta do projeto no terminal

3. Rode a aplicação utilizando Docker. Insira no terminal:

```bash
    npm install
    docker compose up -d
    docker compose exec app npm install
    docker compose exec app npm run dev
```

4. A aplicação irá rodar em http://localhost:5500


---

## Sobre a Lista de Usuários

Os dados de cada conta estavam armazenados no LocalStorage do navegador
Agora os dados estão armazenados no container "db"
Esse container inclui o id, nome e email de cada usuário
Agora, as senhas são ocultas.

Para consultar a database FORA da aplicação, abra um terminal na pasta tecweb-projetos/backend e inserir:

```bash
    npx prisma studio
```

---

## Créditos do grupo

- Rafael Ramos Ottoni de Castro - Matrícula: 2322130069
- André Rodrigo Marques Côrtes  - Matrícula:2322130001


---
