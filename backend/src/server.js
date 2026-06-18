import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Importação das rotas do seu sistema
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware para interpretar requisições JSON
app.use(express.json());

// Configuração de segurança e liberação do CORS para evitar bloqueios no Front-end
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// Servir os arquivos estáticos do Frontend (HTML, CSS, JS do banco)
app.use(express.static('/frontend'));

// Vinculação das rotas da API
app.use('/api/auth', authRoutes); // Cuida de /api/auth/cadastro e /api/auth/login
app.use('/api/users', usersRoutes); // Cuida de GET /api/users e DELETE /api/users/:id

// Rota amigável para acessar a página de cadastro direto pelo link
app.get('/cadastro', (req, res) => {
  res.sendFile('/frontend/src/cadastro/index.html');
});

// Rota amigável para acessar a página da lista de usuários pelo link
app.get('/lista', (req, res) => {
  res.sendFile('/frontend/src/lista/index.html');
});

// Rota padrão (Curinga) - Serve a tela de Login para qualquer outra rota que não exista
app.get('*', (req, res) => {
  // Se for apenas navegação de páginas, joga para a tela inicial de Login
  res.sendFile('/frontend/src/login/index.html');
});

// Tratamento centralizado de erros do Express (Impede o servidor de cair se der bug)
app.use((err, req, res, next) => {
  console.error('Erro detectado no servidor central:', err.message);
  res.status(500).json({ erro: 'Ocorreu um erro interno no servidor.' });
});

// Inicialização do servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});