function calcularMedia() {
    var nomeAluno = prompt("Digite o nome do aluno:");
    var n1 = parseFloat(prompt("Digite a primeira nota:"));
    var n2 = parseFloat(prompt("Digite a segunda nota:"));
    var n3 = parseFloat(prompt("Digite a terceira nota:"));
 
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, insira valores numéricos válidos para as notas.");
        return;
    }
 
    var media = (n1 + n2 + n3) / 3;
 
    alert("A média de " + nomeAluno + " é: " + media.toFixed(2));
 }

