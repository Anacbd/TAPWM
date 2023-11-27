function dividir(a, b) {
    // Testar se a divisão retorna NaN
    if (isNaN(a / b)) {
      console.log("Divisão deu NaN");
    }
    // Testar se a divisão retorna Infinity
    else if (!isFinite(a / b)) {
      console.log("Divisão de Infinity");
    }
    // Caso contrário, retornar o valor da divisão
    else {
      console.log(`Divisão = ${a / b}`);
    }
  }
  
  // Testar a função com diferentes situações
  dividir(5, 2);        // Divisão = 2.5
  dividir(0, 3);        // Divisão = 0
  dividir(10, 0);       // Divisão de Infinity
  dividir(0, 0);        // Divisão deu NaN
  dividir(undefined, 5);  // Divisão inválida - NaN, pois a é undefined
  dividir(8, undefined);  // Divisão inválida - NaN, pois b é undefined
  dividir(null, 3);     // Divisão inválida - Infinity, pois a é null
  dividir(5, null);     // Divisão inválida - NaN, pois b é null