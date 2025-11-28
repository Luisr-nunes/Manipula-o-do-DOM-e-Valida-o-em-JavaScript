function inserirTitulo() {
    const textoDigitado = document.getElementById('txt-titulo').value;
    const elementoTitulo = document.getElementById('titulo');

    if (textoDigitado.trim() === "") {
        elementoTitulo.innerText = "Por favor, digite um título.";
        elementoTitulo.style.color = 'red';
    } else {
        elementoTitulo.innerText = textoDigitado;
        elementoTitulo.style.color = "#128C8E";
    }
}