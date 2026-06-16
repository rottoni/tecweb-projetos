const express = require('express');
const path = require('path');

const authRoutes  = require('./routes/auth');
const usersRoutes = require('./routes/users');

const app = express();

// Parse JSON no body das requisições
app.use(express.json());

// Servir o frontend como arquivos estáticos
app.use(express.static(path.join(__dirname, '../../frontend')));

// Rotas da API
app.use('/api/auth',  authRoutes);
app.use('/api/users', usersRoutes);

// Qualquer rota não encontrada retorna o index.html do frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});