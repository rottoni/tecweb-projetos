import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

async function login(req, res) {
  // Alterado de 'nome' para 'email'
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: 'E-mail e senha são obrigatórios.' });
  }

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuario não encontrado' });
    }

    if (usuario.senha !== senha) {
      return res.status(401).json({ erro: 'Senha incorreta' });
    }

    return res.status(200).json({ mensagem: `Bem-vindo, ${usuario.nome}!` });
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ erro: 'Erro ao processar login no banco.' });
  }
}

async function cadastro(req, res) {
  // Agora recebemos email, nome e senha do front-end
  const { email, nome, senha } = req.body;

  if (!email || !nome || !senha) {
    return res.status(400).json({ erro: 'E-mail, nome e senha são obrigatórios.' });
  }

  try {
    // A verificação de duplicidade agora checa o e-mail único
    const usuarioExistente = await prisma.usuario.findUnique({ where: { email } });

    if (usuarioExistente) {
      return res.status(409).json({ erro: 'Este e-mail já está na lista de usuários cadastrados.' });
    }

    // Salvando os três campos no banco de dados
    await prisma.usuario.create({ 
      data: { email, nome, senha } 
    });

    return res.status(201).json({ mensagem: 'Conta criada com sucesso!' });
  } catch (error) {
    console.error('Erro no cadastro:', error);
    return res.status(500).json({ erro: 'Erro ao salvar usuário no banco.' });
  }
}

export { login, cadastro };