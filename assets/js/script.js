// Menu Hambúrguer
function menuOpen(){
    // Criando variáveis para os nossos elementos
    let menu = document.querySelector('#menu')
    let btnClose = document.getElementById('close-menu')
    let fade = document.querySelector('.fade')
    if(menu.classList.contains('open')){
        menu.classList.remove('open')
    }
    else if(btnClose.addEventListener('click', () =>{
        menu.classList.remove('open')
    }));
    else{
        menu.classList.add('open')

    }
}
