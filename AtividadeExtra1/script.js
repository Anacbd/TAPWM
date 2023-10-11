function calcularSomaEQuadrados() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const num3 = parseFloat(prompt("Digite o terceiro número:"));
  
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      alert("Por favor, insira três números válidos.");
      return;
    }
  
    const soma = num1 + num2 + num3;
    const quadradoNum1 = num1 * num1;
    const quadradoNum2 = num2 * num2;
  
    const result = `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quadradoNum1} e o quadrado do segundo é: ${quadradoNum2}`;
    alert(result);
  }
  
  function verificarSubconjunto() {
    const palavra1 = prompt("Digite a primeira palavra:");
    const palavra2 = prompt("Digite a segunda palavra:");
  
    if (!palavra1 || !palavra2) {
      alert("Erro: Uma ou ambas as palavras estão vazias ou não foram fornecidas.");
      return;
    }
  
    if (palavra1.includes(palavra2)) {
      alert("A segunda palavra é um subconjunto da primeira.");
    } else {
      alert("A segunda palavra não é um subconjunto da primeira.");
    }
  }