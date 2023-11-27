function ordena(num1, num2, num3, num4, num5) {
    // Criar uma matriz com os números fornecidos
    var numeros = [num1, num2, num3, num4, num5];
  
    // Ordenar a matriz em ordem decrescente
    numeros.sort(function(a, b) {
      return b - a;
    });
  
    // Imprimir os números ordenados no console
    console.log("Números em ordem decrescente:", numeros);
  }
  
  // Exemplo de uso da função
  ordena(10, 5, 8, 3, 12);