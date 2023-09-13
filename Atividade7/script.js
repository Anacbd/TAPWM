function jogar(escolhaUsuario) {
    const escolhas = ["pedra", "papel", "tesoura"];
    const escolhaComputador = escolhas[Math.floor(Math.random() * 3)];

    const resultado = determinarVencedor(escolhaUsuario, escolhaComputador);

    exibirResultado(escolhaUsuario, escolhaComputador, resultado);
}

function determinarVencedor(escolhaUsuario, escolhaComputador) {
    if (escolhaUsuario === escolhaComputador) {
        return "Empate!";
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra")
    ) {
        return "Você ganhou!";
    } else {
        return "O computador ganhou!";
    }
}

function exibirResultado(escolhaUsuario, escolhaComputador, resultado) {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `Você escolheu ${escolhaUsuario}. O computador escolheu ${escolhaComputador}. Resultado: ${resultado}`;
}