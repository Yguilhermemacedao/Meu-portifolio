const btnMenu = document.getElementById('btn-menu')

btnMenu.addEventListener('click', () =>{
    let menuLista = document.querySelector('.menu-lista')
    if(menuLista.style.display == 'none'){
        menuLista.style.display = 'flex'
    }else{
        menuLista.style.display = 'none'
    }
})