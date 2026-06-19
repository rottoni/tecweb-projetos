document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('register-form');

  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email          = document.getElementById('emailDoUsuario').value.trim();
    const nome           = document.getElementById('nomeDoUsuario').value.trim();
    const senha          = document.getElementById('senhaDoUsuario').value.trim();
    const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

    // 1. Alerta para e-mail inválido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('⚠️ O script de cadastro parou: e-mail inválido:', email);
      alert('Por favor, insira um e-mail em formato válido (exemplo@email.com) para se cadastrar.');
      return; 
    }

    if (!nome) {
      alert('Por favor, insira o seu nome.');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, nome, senha }), 
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.mensagem || 'Cadastro realizado com sucesso!');
        window.location.href = '/src/login/index.html';
      } else {
        alert(data.erro || 'Erro ao realizar cadastro.');
      }
    } catch (error) {
      alert('Erro ao conectar com o servidor. Tente novamente.');
      console.error('Detalhes do erro de conexão:', error);
    }
  });
});