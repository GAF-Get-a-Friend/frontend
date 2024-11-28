const menuToggle = document.querySelector('.menu-toggle');
const filtros = document.querySelector('.Filtros');

menuToggle.addEventListener('click', function () {
    filtros.classList.toggle('active'); // Alterna a classe "active" para abrir/fechar o menu
});

document.addEventListener('click', function (event) {
    if (!filtros.contains(event.target) && !menuToggle.contains(event.target)) {
        filtros.classList.remove('active'); // Fecha o menu se clicar fora
    }
});