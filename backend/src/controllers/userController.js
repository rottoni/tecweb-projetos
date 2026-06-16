const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function listarUsuarios(req, res) {
  const usuarios = await prisma.usuario.findMany({
    select: { id: true, nome: true, criadoEm: true }, // senha nunca é exposta
    orderBy: { criadoEm: 'asc' },
  });

  return res.status(200).json(usuarios);
}

async function excluirUsuario(req, res) {
  const { nome } = req.params;

  const usuario = await prisma.usuario.findUnique({ where: { nome } });

  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado.' });
  }

  await prisma.usuario.delete({ where: { nome } });

  return res.status(200).json({ mensagem: `Usuário ${nome} excluído com sucesso.` });
}

module.exports = { listarUsuarios, excluirUsuario };