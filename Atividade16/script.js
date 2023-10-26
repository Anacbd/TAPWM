function transformarTexto(upper, lower) {
    var inputText = document.getElementById('idTexto');

    if (upper.checked) {
        inputText.value = inputText.value.toUpperCase();
    }

    if (lower.checked) {
        inputText.value = inputText.value.toLowerCase();
    }
}