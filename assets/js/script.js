const btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener('click', () => {
    let menuLista = document.querySelector('.menu-lista');
    menuLista.classList.toggle('menu-open');
});
