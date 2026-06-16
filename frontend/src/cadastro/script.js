document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('register-form');

  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nome           = document.getElementById('nomeDoUsuario').value.trim();
      const senha          = document.getElementById('senhaDoUsuario').value.trim();
      const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

      if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
      }

      try {
        // Chamada apontando diretamente para a porta do container configurada
        const response = await fetch('http://localhost:3000/api/auth/cadastro', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nome, senha }), 
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
  }
});