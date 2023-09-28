function encontrarMaiorNumero(num1, num2, num3, num4) {
    return Math.max(num1, num2, num3, num4);
}

function ordenarNumerosCrescente(num1, num2, num3, num4) {
    const numeros = [num1, num2, num3, num4];
    numeros.sort(function(a, b) {
        return a - b;
    });
    return numeros;
}