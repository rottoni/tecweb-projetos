import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

async function login(req, res) {
  const { nome, senha } = req.body;

  if (!nome || !senha) {
    return res.status(400).json({ erro: 'Nome e senha são obrigatórios.' });
  }

  try {
    const usuario = await prisma.usuario.findUnique({ where: { nome } });

    if (!usuario || usuario.senha !== senha) {
      return res.status(401).json({ erro: 'Usuário ou senha incorretos.' });
    }

    return res.status(200).json({ mensagem: `Bem-vindo, ${usuario.nome}!` });
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ erro: 'Erro ao processar login no banco.' });
  }
}

async function cadastro(req, res) {
  const { nome, senha } = req.body;

  if (!nome || !senha) {
    return res.status(400).json({ erro: 'Nome e senha são obrigatórios.' });
  }

  try {
    const usuarioExistente = await prisma.usuario.findUnique({ where: { nome } });

    if (usuarioExistente) {
      return res.status(409).json({ erro: 'Este nome de usuário já está sendo usado no AR Bank.' });
    }

    await prisma.usuario.create({ 
      data: { nome, senha } 
    });

    return res.status(201).json({ mensagem: 'Conta criada com sucesso!' });
  } catch (error) {
    console.error('Erro no cadastro:', error);
    return res.status(500).json({ erro: 'Erro ao salvar usuário no banco.' });
  }
}

export { login, cadastro };