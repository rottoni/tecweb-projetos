# 🖥️  Atividade Prática 01

Esse é um projeto de desenvolvimento Web simples que inclui as seguintes funcionalidades:

1. Tela de login de usuário
2. Tela de cadastro de novo usuário
3. Renderização de uma lista com os nomes dos usuários
4. Armazenamento de dados via localStorage

Observações: 
    A. Esse projeto será reutilizado para fazer outra atividade de Programação de Dispositivos Moveis, por isso contem o logo da empresa fictícia AR Bank
    B. Esqueci que a atividade exigia uma branch develop, os primeiros commits foram feitos direto na branch main.


---

## Como rodar essa aplicação web

1. Clone esse repositório na sua máquina:
    git clone https://github.com/seu-usuario/seu-repositorio.git

2. Acesse a pasta do projeto
    cd C:/ [...] /tecweb-projeto01

3. Há dois métodos para rodar a aplicação:

    A. Utilizando Docker. Digite no terminal os seguintes comandos:
        docker compose up -d
        docker compose exec app npm install
        docker compose exec app npm run dev

    B. Utilizando Live Server.
        Instale a extensão do VS Code chamada Live Server
        Clique em "Go Live" no canto inferior direito do VS Code.

4. Em ambos os casos, a aplicação irá rodar na porta 5500.


---

## Dica para ver quais usuários já estão registrados

Os dados de cada conta (usuário e senha) estão armazenados no LocalStorage.
Para consultar, abra o console do navegador (apertando F12 e clicando em console).
Lá haverá uma mensagem contendo os dados.
Obviamente, isso serve apenas como uma demonstração, uma aplicação real NUNCA teria esses dados expostos.
Miau.

---

## Dica para trocar dados de usuários

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
- André Rodrigo Marques Côrtes - Matrícula: 2322130001


---
