function renderizarcontas() {
    // Cria o container e traz os dados de contas
    const container = document.getElementById('lista-contas');
    const dadosBrutos = localStorage.getItem('contas');
    
    //Se não existir usuário, informar. Se existir trazer.
    if (!dadosBrutos || dadosBrutos === '{}') {
        container.innerHTML = "<p>Nenhum usuário cadastrado.</p>";
        return;
    }
    const contas = JSON.parse(dadosBrutos);

    //Limpar o conatiner
    container.innerHTML = '';

    // Renderização Múltipla, percorre as chaves do objeto
    Object.keys(contas).forEach(nome => {
        const card = document.createElement('div');
        card.className = 'user-card';
        // Criar o elemento HTML dinamicamente
        card.innerHTML = `
            <div>
                <strong>Usuário:</strong> ${nome} <br>
                <small>Senha: ${contas[nome].senhaDoUsuario}</small>
            </div>
            <button class="btn-excluir" onclick="excluirUsuario('${nome}')">Excluir</button>
        `;

        container.appendChild(card);
    });
}

function excluirUsuario(nomeUsuario) {
    // Pegar os dados atuais
    const dadosBrutos = localStorage.getItem('contas');
    const contas = JSON.parse(dadosBrutos);

    // Remover a chave específica do objeto
    if (confirm(`Tem certeza que deseja excluir o usuário ${nomeUsuario}?`)) {
        delete contas[nomeUsuario];

        // Salvar o objeto atualizado e renderiza de novo
        localStorage.setItem('contas', JSON.stringify(contas));
        renderizarcontas();
    }
}

// Inicializa a lista ao abrir a página
renderizarcontas();