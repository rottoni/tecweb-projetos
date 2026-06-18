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

      const email = document.getElementById('emailDoUsuario').value.trim();
      const senha = document.getElementById('senhaDoUsuario').value.trim();

      // ALERTA PARA E-MAIL INVÁLIDO (Formato incorreto)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail em formato válido (exemplo@email.com).');
        return; // Interrompe a execução aqui, nem envia para o back-end
      }

      try {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, senha }),
        });

        const data = await response.json();

        if (response.ok) {
          alert(data.mensagem);
          window.location.href = '../lista/index.html';
        } else {
          //ALERTAS DE RETORNO DO BANCO DE DADOS
          if (response.status === 404) {
            alert('E-mail não encontrado! Cadastre-se ou verifique os dados.');
          } else if (response.status === 401) {
            alert('Senha incorreta! Tente novamente.');
          } else {
            alert(data.erro || 'Erro ao realizar login.');
          }
        }
      } catch (error) {
        alert('Erro ao conectar com o servidor. Tente novamente.');
        console.error(error);
      }
    });
  }
});