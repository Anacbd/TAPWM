function verificarTriangulo() {
    const ladoA = parseFloat(document.getElementById("a").value);
    const ladoB = parseFloat(document.getElementById("b").value);
    const ladoC = parseFloat(document.getElementById("c").value);

    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
        document.getElementById("resultado").textContent = "Por favor, insira valores numéricos.";
        return;
    }

    const condicao1 = Math.abs(ladoB - ladoC) < ladoA && ladoA < ladoB + ladoC;
    const condicao2 = Math.abs(ladoA - ladoC) < ladoB && ladoB < ladoA + ladoC;
    const condicao3 = Math.abs(ladoA - ladoB) < ladoC && ladoC < ladoA + ladoB;

    if (condicao1 && condicao2 && condicao3) {
        if (ladoA === ladoB && ladoB === ladoC) {
            document.getElementById("resultado").textContent = "É um triângulo equilátero.";
        } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
            document.getElementById("resultado").textContent = "É um triângulo isósceles.";
        } else {
            document.getElementById("resultado").textContent = "É um triângulo escaleno.";
        }
    } else {
        document.getElementById("resultado").textContent = "Não é possível formar um triângulo com esses lados.";
    }
}