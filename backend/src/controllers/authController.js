const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function login(req, res) {
  const { nome, senha } = req.body;

  if (!nome || !senha) {
    return res.status(400).json({ erro: 'Nome e senha são obrigatórios.' });
  }

  const usuario = await prisma.usuario.findUnique({ where: { nome } });

  if (!usuario || usuario.senha !== senha) {
    return res.status(401).json({ erro: 'Usuário ou senha incorretos.' });
  }

  return res.status(200).json({ mensagem: `Bem-vindo, ${usuario.nome}!` });
}

async function cadastro(req, res) {
  const { nome, senha, confirmarSenha } = req.body;

  if (!nome || !senha || !confirmarSenha) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
  }

  if (senha !== confirmarSenha) {
    return res.status(400).json({ erro: 'As senhas não coincidem.' });
  }

  const usuarioExistente = await prisma.usuario.findUnique({ where: { nome } });

  if (usuarioExistente) {
    return res.status(409).json({ erro: 'Este nome de usuário já está sendo usado no AR Bank.' });
  }

  await prisma.usuario.create({ data: { nome, senha } });

  return res.status(201).json({ mensagem: 'Conta criada com sucesso!' });
}

module.exports = { login, cadastro };