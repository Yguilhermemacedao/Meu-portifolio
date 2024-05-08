// Menu Hambúrguer
function menuOpen(){
    let menu = document.querySelector('.menu-lista')
    if(menu.style.display === 'none'){
        menu.style.display = 'flex'
    }else{
        menu.style.display = 'none'
    }
}