function mudarForma() {
    
    const divForma = document.getElementById('forma');
    const botao = document.getElementById('btn-forma');

    const estiloComputado = window.getComputedStyle(divForma);
    const raioBorda = estiloComputado.borderRadius;

    if (raioBorda !== '0px') {
        divForma.style.borderRadius = '0px';
        botao.innerText = "Retornar forma original";
    } else {
        divForma.style.borderRadius = '50%';
        botao.innerText = "Mudar forma";
    }
}