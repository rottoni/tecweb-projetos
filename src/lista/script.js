function renderizarUsuarios() {
    // Cria o container e traz os dados de usuarios
    const container = document.getElementById('lista-usuarios');
    const dadosBrutos = localStorage.getItem('usuarios');
    
    //Se não existir usuário, informar. Se existir trazer.
    if (!dadosBrutos || dadosBrutos === '{}') {
        container.innerHTML = "<p>Nenhum usuário cadastrado.</p>";
        return;
    }
    const usuarios = JSON.parse(dadosBrutos);

    //Limpar o conatiner
    container.innerHTML = '';

    // Renderização Múltipla, percorre as chaves do objeto
    Object.keys(usuarios).forEach(nome => {
        const card = document.createElement('div');
        card.className = 'user-card';
        // Criar o elemento HTML dinamicamente
        card.innerHTML = `
            <div>
                <strong>Usuário:</strong> ${nome} <br>
                <small>Senha: ${usuarios[nome].senhaDoUsuario}</small>
            </div>
            <button class="btn-excluir" onclick="excluirUsuario('${nome}')">Excluir</button>
        `;

        container.appendChild(card);
    });
}

function excluirUsuario(nomeUsuario) {
    // Pegar os dados atuais
    const dadosBrutos = localStorage.getItem('usuarios');
    const usuarios = JSON.parse(dadosBrutos);

    // Remover a chave específica do objeto
    if (confirm(`Tem certeza que deseja excluir o usuário ${nomeUsuario}?`)) {
        delete usuarios[nomeUsuario];

        // Salvar o objeto atualizado e renderiza de novo
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        renderizarUsuarios();
    }
}

// Inicializa a lista ao abrir a página
renderizarUsuarios();