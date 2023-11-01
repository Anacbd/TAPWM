function mostrarConfirmacao() {
    const cursoSelecionado = document.getElementById("cursos").value;
    const confirmacao = confirm("Deseja abrir a página do curso de " + cursoSelecionado + "?");

    if (confirmacao) {
        abrirJanelaCurso(cursoSelecionado);
    }
}

function abrirJanelaCurso(curso) {
    const largura = 600;
    const altura = 300;
    const left = (screen.width - largura) / 2;
    const top = (screen.height - altura) / 2;
    const janela = window.open("", curso, "width=" + largura + ", height=" + altura + ", left=" + left + ", top=" + top);
    
    // Insira informações sobre o curso na nova janela
    let conteudo = "";

    if (curso === "analise-sistemas") {
        conteudo = "Curso de Análise e Desenvolvimento de Sistemas na Fatec Sorocaba. Este curso aborda programação, desenvolvimento de software e muito mais.";
    } else if (curso === "gestao-empresarial") {
        conteudo = "Curso de Gestão Empresarial na Fatec Sorocaba. Este curso foca em administração, gestão de negócios e estratégias empresariais.";
    } else if (curso === "logistica") {
        conteudo = "Curso de Logística na Fatec Sorocaba. Este curso abrange logística de transporte, gestão de estoques e cadeia de suprimentos.";
    } else if (curso === "redes-computadores") {
        conteudo = "Curso de Redes de Computadores na Fatec Sorocaba. Este curso explora redes, segurança de dados e administração de sistemas.";
    }

    janela.document.write("<html><head><title>" + curso + "</title></head><body>" + conteudo + "</body></html>");
}




