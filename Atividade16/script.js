function validarFormulario() {
    const form = document.forms.meuForm;
    const nome = form.nome.value;
    const email = form.email.value;
    const comentario = form.comentario.value;
    const pesquisa = form.pesquisa.value;

    // Validar nome
    if (nome.length < 10) {
        alert("Nome deve ter pelo menos 10 caracteres.");
        return false;
    }

    // Validar email
    if (!email.includes("@") || !email.includes(".")) {
        alert("Email deve conter '@' e '.'.");
        return false;
    }

    // Validar comentário
    if (comentario.length < 20) {
        alert("Comentário deve ter pelo menos 20 caracteres.");
        return false;
    }

    // Validar pesquisa
    if (pesquisa !== "sim" && pesquisa !== "nao") {
        alert("Por favor, escolha uma opção para a pesquisa.");
        return false;
    }

    // Verificar se é a primeira vez na página
    if (pesquisa === "sim") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre a esta página!");
    }
}