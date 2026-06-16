# 🖥️  Atividade Prática 01

Esse é um projeto de desenvolvimento Web simples que inclui as seguintes funcionalidades:

1. Tela de login de usuário
2. Tela de cadastro de novo usuário
3. Renderização de uma lista com os nomes dos usuários
4. Armazenamento de dados via localStorage

# 🖥️  Atividade Prática 02

O objetivo é incluir um backend funcional integrado com um API REST ao projeto

DESCRIÇÃO DA API
---

## Como rodar essa aplicação web

1. Por um terminal, clone esse repositório na sua máquina:
    git clone "https://github.com/rottoni/tecweb-projetos"

2. Acesse a pasta do projeto no terminal

3. Rode a aplicação utilizando Docker. Insira no terminal:

```bash
    docker compose up -d
    docker compose exec app npm install
    docker compose exec app npm run dev
```

4. A aplicação irá rodar em http://localhost:5500


---

## Dica para ver quais usuários já estão registrados


MUDAR POIS NÃO SÃO GUARDADOS MAIS POR LOCALSTORAGE
    Os dados de cada conta (usuário e senha) estão armazenados no LocalStorage.
    Para consultar, abra o console do navegador (apertando F12 e clicando em console).
    Lá haverá uma mensagem contendo os dados.
    Obviamente, isso serve apenas como uma demonstração, uma aplicação real NUNCA teria esses dados expostos.
    Miau.

---

## Dica para trocar dados de usuários


MUDAR POIS NÃO SÃO MAIS GUARDADOS EM LOCALSTORAGE
Para trocar senhas e nomes de usuários já estabelecidos faça o seguinte:
    1. Abra a aplicação
    2. No navegador, abra o console (apertando F12 e clicando em console)
    3. Insira: localStorage.removeItem('contas');
    4. Insira: location.reload;
    5. Feche a aplicação e faça as alterações no arquivo contas.js
    6. Abra de novo a aplicação e os novos dados estarão salvos.


---

## Créditos do grupo

- Rafael Ramos Ottoni de Castro - Matrícula: 2322130069
- André Rodrigo Marques Côrtes  - Matrícula:2322130001


---
