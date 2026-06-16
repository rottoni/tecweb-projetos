import { PrismaClient } from '../src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  const contasIniciais = [
    { name: 'rafael', email: 'rafael@email.com', password: 'senha111' },
    { name: 'andre',  email: 'andre@email.com',  password: 'senha222' },
    { name: 'luan',   email: 'luan@email.com',   password: 'senha333' },
    { name: 'paloma', email: 'paloma@email.com', password: 'senha444' },
    { name: 'renan',  email: 'renan@email.com',  password: 'senha555' },
    { name: 'diego',  email: 'diego@email.com',  password: 'senha666' },
    { name: 'fabio',  email: 'fabio@email.com',  password: 'senha777' },
    { name: 'emily',  email: 'emily@email.com',  password: 'senha888' },
    { name: 'thais',  email: 'thais@email.com',  password: 'senha999' },
    { name: 'celio',  email: 'celio@email.com',  password: 'senha000' },
  ];

  for (const conta of contasIniciais) {
    // Alterado para 'user' (conforme o seu schema.prisma)
    await prisma.user.upsert({
      where: { email: conta.email }, // O campo único no seu schema é o email
      update: {},
      create: conta,
    });
  }

  console.log('Contas iniciais criadas com sucesso no banco na nuvem!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });