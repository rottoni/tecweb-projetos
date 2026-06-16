async function renderizarContas() {
  const container = document.getElementById('lista-contas');

  try {
    const response = await fetch('/api/users');
    const usuarios = await response.json();

    if (!usuarios || usuarios.length === 0) {
      container.innerHTML = '<p>Nenhum usuário cadastrado.</p>';
      return;
    }

    container.innerHTML = '';

    usuarios.forEach(usuario => {
      const card = document.createElement('div');
      card.className = 'user-card';
      card.innerHTML = `
        <div>
          <strong>Usuário:</strong> ${usuario.nome}
        </div>
        <button class="btn-excluir" onclick="excluirUsuario('${usuario.nome}')">Excluir</button>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    container.innerHTML = '<p>Erro ao carregar usuários.</p>';
    console.error(error);
  }
}

async function excluirUsuario(nome) {
  if (!confirm(`Tem certeza que deseja excluir o usuário ${nome}?`)) return;

  try {
    const response = await fetch(`/api/users/${nome}`, {
      method: 'DELETE',
    });

    const data = await response.json();

    if (response.ok) {
      await renderizarContas();
    } else {
      alert(data.erro);
    }
  } catch (error) {
    alert('Erro ao conectar com o servidor.');
    console.error(error);
  }
}

renderizarContas();