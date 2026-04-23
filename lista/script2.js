function renderizarLista() {
    const lista = document.getElementById('lista-usuarios');
    //  Pega os dados (e verifica se existem para não dar erro)
    const contas = JSON.parse(localStorage.getItem('contas')) || {};
    // verifique se a lista não está duplicada.
    lista.innerHTML = ""; 

    // Renderiza os dados de cada item
    Object.keys(contas).forEach(usuario => {
        const item = document.createElement('li');
        item.textContent = usuario;
        
        item.classList.add('item-usuario'); 
        
        lista.appendChild(item);
    });
}