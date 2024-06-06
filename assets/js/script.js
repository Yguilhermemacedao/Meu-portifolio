function openMenu() {
    const burger = document.getElementById('burger');
    const menuLista = document.querySelector('.menu-lista');
    
    if (burger.checked) {
        burger.checked = false;
        menuLista.classList.remove('menu-open');
        setTimeout(() => {
            menuLista.style.display = 'none';
        }, 400); // Aguarda a conclusão da animação para esconder o menu
    } else {
        burger.checked = true;
        menuLista.style.display = 'flex';
        setTimeout(() => {
            menuLista.classList.add('menu-open');
        }, 10); // Pequeno delay para permitir a transição
    }
}
