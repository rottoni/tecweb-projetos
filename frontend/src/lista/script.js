async function renderizarContas() {
  const container = document.getElementById('lista-contas');

  try {
    const response = await fetch('http://localhost:3000/api/users');
    const usuarios = await response.json();

    if (!usuarios || usuarios.length === 0) {
      container.innerHTML = '<p>Nenhum usuário cadastrado.</p>';
      return;
    }

    container.innerHTML = '';

    usuarios.forEach(usuario => {
      // LOG DE TESTE: Abre o console do navegador (F12) para ver se o ID está chegando aqui
      console.log('Dados do usuário recebidos:', usuario);

      // Garante a captura do ID independente de pequenas variações de resposta do JSON
      const usuarioId = usuario.id;

      const card = document.createElement('div');
      card.className = 'user-card';
      card.innerHTML = `
        <div class="user-info">
          <div class="user-name">
            <strong>Usuário:</strong> ${usuario.nome}
          </div>
          <div class="user-email">
            <strong>Email:</strong> ${usuario.email}
          </div>
        </div>
        <button class="btn-excluir" onclick="excluirUsuario(${usuarioId}, '${usuario.nome}')">Excluir</button>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    container.innerHTML = '<p>Erro ao carregar usuários.</p>';
    console.error('Erro ao carregar a lista:', error);
  }
}

async function excluirUsuario(id, nome) {
  // Se o ID falhar no clique antes de enviar, já avisa no navegador
  if (!id) {
    alert('Erro local: O sistema não conseguiu identificar o ID deste usuário.');
    return;
  }

  if (!confirm(`Tem certeza que deseja excluir o usuário ${nome}?`)) return;

  try {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'DELETE',
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.mensagem || 'Usuário excluído com sucesso!');
      await renderizarContas(); 
    } else {
      alert(data.erro || 'Não foi possível excluir o usuário.');
    }
  } catch (error) {
    alert('Erro ao conectar com o servidor.');
    console.error('Erro ao deletar:', error);
  }
}

window.excluirUsuario = excluirUsuario;

// Executa a listagem ao carregar o script
renderizarContas();