function realizarOperacoes() {
    var numero1 =
parseFloat(prompt("Digite o primeiro número:"));
    var numero2 =
parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira valores númericos válidos para as notas.");
        return;
    }

    var soma = numero1 + numero2;
    var subtracao = numero1 - numero2;
    var produto = numero1 * numero2;
    var divisao = numero1 / numero2;
    var resto = numero1 % numero2;

    var resultado = "Soma: " + soma + "\n";
    resultado += "Subtração: " + subtracao + "\n";
    resultado += "Produto: " + produto + "\n";
    resultado += "Divisão: " + divisao.toFixed(2) + "\n";
    resultado += "Resto: " + resto;

    alert(resultado);
}