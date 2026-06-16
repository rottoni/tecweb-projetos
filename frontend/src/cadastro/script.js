document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('register-form');

  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nome          = document.getElementById('nomeDoUsuario').value.trim();
      const senha         = document.getElementById('senhaDoUsuario').value.trim();
      const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

      try {
        const response = await fetch('/api/auth/cadastro', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nome, senha, confirmarSenha }),
        });

        const data = await response.json();

        if (response.ok) {
          alert(data.mensagem);
          window.location.href = '../login/index.html';
        } else {
          alert(data.erro);
        }
      } catch (error) {
        alert('Erro ao conectar com o servidor. Tente novamente.');
        console.error(error);
      }
    });
  }
});