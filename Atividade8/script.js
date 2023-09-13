let respostas = [];

function gerarDadosAleatorios() {
    for (let i = 0; i < 45; i++) {
        const idade = Math.floor(Math.random() * 80) + 18; // Idade entre 18 e 97 anos
        const sexo = Math.random() < 0.5 ? "homem" : "mulher";
        const opiniao = Math.floor(Math.random() * 4) + 1; // Opinião de 1 a 4
        respostas.push({ idade, sexo, opiniao });
    }
    calcularResultados();
}

function adicionarResposta() {
    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const opiniao = parseInt(document.getElementById("opiniao").value);
    respostas.push({ idade, sexo, opiniao });
    calcularResultados();
}

function calcularResultados() {
    const idades = respostas.map(resposta => resposta.idade);
    const mediaIdade = idades.length > 0 ? idades.reduce((a, b) => a + b) / idades.length : 0;
    const maisVelha = Math.max(...idades);
    const maisNova = Math.min(...idades);
    const pessimoCount = respostas.filter(resposta => resposta.opiniao === 1).length;
    const otimoBomCount = respostas.filter(resposta => resposta.opiniao === 3 || resposta.opiniao === 4).length;
    const otimoBomPercentage = (otimoBomCount / respostas.length) * 100;
    const homensCount = respostas.filter(resposta => resposta.sexo === "homem").length;
    const mulheresCount = respostas.filter(resposta => resposta.sexo === "mulher").length;

    document.getElementById("mediaIdade").textContent = mediaIdade.toFixed(2);
    document.getElementById("maisVelha").textContent = maisVelha;
    document.getElementById("maisNova").textContent = maisNova;
    document.getElementById("pessimoCount").textContent = pessimoCount;
    document.getElementById("otimoBomPercentage").textContent = otimoBomPercentage.toFixed(2) + "%";
    document.getElementById("homensCount").textContent = homensCount;
    document.getElementById("mulheresCount").textContent = mulheresCount;
}