import { PrismaClient } from '../src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {

  //Toda vez que alguém clonar o projeto, ele vai rodar esse seed para criar algumas contas iniciais
  //O método upsert serve para ao rodar o programa várias vezes, essas contas não sejam reinseridas, evitando erros de duplicidade
  const contasIniciais = [
    { nome: 'Rafael', email: 'rafael@email.com', senha: '123' },
    { nome: 'Andre',  email: 'andre@email.com',  senha: '123' },
    { nome: 'Luan',   email: 'luan@email.com',   senha: '123' },
    { nome: 'Paloma', email: 'paloma@email.com', senha: '123' },
    { nome: 'Renan',  email: 'renan@email.com',  senha: '123' },
    { nome: 'Diego',  email: 'diego@email.com',  senha: '123' },
    { nome: 'Fabio',  email: 'fabio@email.com',  senha: '123' },
    { nome: 'Emily',  email: 'emily@email.com',  senha: '123' },
    { nome: 'Thais',  email: 'thais@email.com',  senha: '123' },
    { nome: 'Celio',  email: 'celio@email.com',  senha: '123' },
  ];

  for (const conta of contasIniciais) {
    await prisma.usuario.upsert({
      where: { email: conta.email }, 
      update: {},
      create: conta,
    });
  }

  console.log('Contas iniciais populadas com sucesso no banco de dados!');
}

main()
  .catch((e) => {
    console.error('Erro ao rodar o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });