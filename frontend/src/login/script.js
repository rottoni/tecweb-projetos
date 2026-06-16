document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const btnGoToRegister = document.getElementById('go-to-register');

  if (btnGoToRegister) {
    btnGoToRegister.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = '../cadastro/index.html';
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const nome  = document.getElementById('username').value.trim();
      const senha = document.getElementById('password').value.trim();

      try {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nome, senha }),
        });

        const data = await response.json();

        if (response.ok) {
          alert(data.mensagem);
          window.location.href = '../lista/index.html';
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