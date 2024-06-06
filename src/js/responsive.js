function checkWidth() {
    const elements = document.querySelectorAll('.titles-end');
    if (window.innerWidth < 767) {
        elements.forEach(element => element.classList.remove('titles-end'));
    } else {
        // Opcional: Adiciona a classe novamente se a largura for maior que 767 pixels
        elements.forEach(element => element.classList.add('titles-end'));
    }
}

window.addEventListener('resize', checkWidth);
document.addEventListener('DOMContentLoaded', checkWidth);
