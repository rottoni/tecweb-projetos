document.addEventListener('DOMContentLoaded', () => {
    console.log("script.js carregado");

    const loginForm = document.getElementById('login-form');
    const btnGoToRegister = document.getElementById('go-to-register');

    console.log("loginForm encontrado:", loginForm);
    console.log("contas no localStorage:", localStorage.getItem('contas'));

    if (btnGoToRegister) {
        btnGoToRegister.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = '../cadastro/index.html'; // ⚠️ ajuste o caminho se necessário
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log("Submit disparado!");

            const campoUser  = document.getElementById('username').value.trim();
            const campoSenha = document.getElementById('password').value.trim();
            console.log("Usuário digitado:", campoUser);

            const contasString = localStorage.getItem('contas');
            const contas = contasString ? JSON.parse(contasString) : [];
            console.log("Contas carregadas:", contas);

            const contaValida = contas[campoUser]?.senhaDoUsuario === campoSenha;

            if (contaValida) {
                alert(`Bem-vindo, ${campoUser}!`);
                window.location.href = '../lista/index.html';
            } else {
                alert("Usuário ou senha incorretos.");
            }
        });
    } else {
        console.error("❌ loginForm não encontrado! Verifique o id='login-form' no HTML.");
    }
});