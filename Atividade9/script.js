document.addEventListener("DOMContentLoaded", function() {
    const imcForm = document.getElementById("imcForm");
    const resultadoIMCSpan = document.getElementById("resultadoIMC");
    const classificacaoSpan = document.getElementById("classificacao");
    const grauObesidadeSpan = document.getElementById("grauObesidade");

    imcForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const altura = parseFloat(document.getElementById("altura").value);
        const peso = parseFloat(document.getElementById("peso").value);

        if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
            alert("Por favor, insira valores válidos para altura e peso.");
            return;
        }

        const imc = peso / (altura * altura);

        let classificacao = "";
        let grauObesidade = "";

        if (imc < 16.5) {
            classificacao = "Magreza";
            grauObesidade = "0";
        } else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = "Normal";
            grauObesidade = "0";
        } else if (imc >= 25 && imc <= 29.9) {
            classificacao = "Sobrepeso";
            grauObesidade = "1";
        } else if (imc >= 30 && imc <= 39.9) {
            classificacao = "Obesidade";
            grauObesidade = "2";
        } else {
            classificacao = "Obesidade Grave";
            grauObesidade = "3";
        }

        resultadoIMCSpan.textContent = imc.toFixed(2);
        classificacaoSpan.textContent = classificacao;
        grauObesidadeSpan.textContent = grauObesidade;
    });
});