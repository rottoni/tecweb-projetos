document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const novoUser     = document.getElementById('nomeDoUsuario').value.trim();
            const novaSenha    = document.getElementById('senhaDoUsuario').value.trim();
            const confirmaSenha = document.getElementById('confirmarSenha').value.trim();

            // Verifica se as senhas coincidem
            if (novaSenha !== confirmaSenha) {
                alert("As senhas não coincidem. Tente novamente.");
                return;
            }

            // Recupera o objeto indexado do localStorage
            const contasAtuais = JSON.parse(localStorage.getItem('contas')) || {};

            // Verifica se o usuário já existe
            if (contasAtuais[novoUser]) {
                alert("Este nome de usuário já está sendo usado no AR Bank.");
                return;
            }

            // Salva o novo usuário como objeto indexado
            contasAtuais[novoUser] = { senhaDoUsuario: novaSenha };
            localStorage.setItem('contas', JSON.stringify(contasAtuais));

            alert("Conta criada com sucesso! Agora você pode fazer login.");
            window.location.href = '../login/index.html';
        });
    }
});