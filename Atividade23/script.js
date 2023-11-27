function procura(texto) {
    // Converter o texto para minúsculas para facilitar a contagem
    var textoMinusc = texto.toLowerCase();
  
    // Contar a ocorrência da letra 'a' no texto
    var contagemA = 0;
    for (var i = 0; i < textoMinusc.length; i++) {
      if (textoMinusc[i] === 'a') {
        contagemA++;
      }
    }
  
    // Imprimir o resultado no console
    console.log(`Quantidade de letras 'A' encontradas: ${contagemA}`);
  }
  
  // Exemplo de uso da função
  procura("Este é um Exemplo de Texto com Algumas letras 'A'");