let menuBtn = document.querySelector('.menu-mobile i');
menuBtn.addEventListener('click', ()=>{
    let itensMenu = document.querySelector('.mobile-itens');
    if(itensMenu.classList.contains('show')){
        itensMenu.classList.remove('show')
        itensMenu.classList.add('hide')
    }else{
        itensMenu.classList.remove('hide')
        itensMenu.classList.add('show')
    }
});