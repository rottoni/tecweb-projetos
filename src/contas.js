// Contas simuladas de usuarios do AR Bank

function inicializarContas() {
    const contasString = localStorage.getItem('contas');
    const contas = contasString ? JSON.parse(contasString) : {};

    // Reinicializa se vazio ou corrompido
    const validas = Object.values(contas).every(c => c.senhaDoUsuario);

    if (Object.keys(contas).length === 0 || !validas) {
        const contasIniciais = {
            "rafael":       { senhaDoUsuario: "senha111" },
            "andre":        { senhaDoUsuario: "senha222" },
            "luan":         { senhaDoUsuario: "senha333" },
            "paloma":       { senhaDoUsuario: "senha444" },
            "renan":        { senhaDoUsuario: "senha555" },
            "diego":        { senhaDoUsuario: "senha666" },
            "fabio":        { senhaDoUsuario: "senha777" },
            "emily":        { senhaDoUsuario: "senha888" },
            "thais":        { senhaDoUsuario: "senha999" },
            "celio":        { senhaDoUsuario: "senha000" }
        };
        localStorage.setItem('contas', JSON.stringify(contasIniciais));
    }
}

inicializarContas();