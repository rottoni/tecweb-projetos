import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

// Lista todos os usuários cadastrados
async function listarUsuarios(req, res) {
  try {
    const usuarios = await prisma.usuario.findMany({
      select: { 
        id: true, 
        nome: true 
        // criadoEm foi removido pois não existe no seu schema.prisma
      },
      orderBy: { 
        id: 'asc' // Ordena por ID numérico de forma crescente
      },
    });

    return res.status(200).json(usuarios);
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    return res.status(500).json({ erro: 'Ocorreu um erro ao buscar os usuários.' });
  }
}

// Exclui um usuário baseado no ID recebido na rota
async function excluirUsuario(req, res) {
  const { id } = req.params;

  try {
    // Converte o ID recebido em string para número inteiro, que é o padrão do Prisma
    const idNumerico = parseInt(id, 10);

    if (isNaN(idNumerico)) {
      return res.status(400).json({ erro: 'ID inválido fornecido.' });
    }

    // Busca se o usuário realmente existe antes de tentar deletar
    const usuario = await prisma.usuario.findUnique({ 
      where: { id: idNumerico } 
    });

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado.' });
    }

    // Deleta o usuário do banco PostgreSQL
    await prisma.usuario.delete({ 
      where: { id: idNumerico } 
    });

    return res.status(200).json({ mensagem: `Usuário ${usuario.nome} excluído com sucesso.` });
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    return res.status(500).json({ erro: 'Erro interno ao tentar excluir o usuário.' });
  }
}

export { listarUsuarios, excluirUsuario };