const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const contasIniciais = [
    { nome: 'rafael', senha: 'senha111' },
    { nome: 'andre',  senha: 'senha222' },
    { nome: 'luan',   senha: 'senha333' },
    { nome: 'paloma', senha: 'senha444' },
    { nome: 'renan',  senha: 'senha555' },
    { nome: 'diego',  senha: 'senha666' },
    { nome: 'fabio',  senha: 'senha777' },
    { nome: 'emily',  senha: 'senha888' },
    { nome: 'thais',  senha: 'senha999' },
    { nome: 'celio',  senha: 'senha000' },
  ];

  for (const conta of contasIniciais) {
    await prisma.usuario.upsert({
      where:  { nome: conta.nome },
      update: {},
      create: conta,
    });
  }

  console.log('Contas iniciais criadas com sucesso!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });