let menu_icon = document.querySelector('.header__menu-icon');
let nav = document.querySelector('.header__nav');
let body = document.querySelector('.body');

menu_icon.addEventListener('click', ()=> {
    menu_icon.classList.toggle('header__menu-icon_open');
    nav.classList.toggle('nav_open');
    body.classList.toggle('hidden-content')
})

// MODAL
let modal_button = document.querySelector('.header__button');
let modalCallForm = document.getElementById('modal-call-form');

modal_button.addEventListener('click', ()=> {
    modalCallForm.classList.add('modal-parent_open');

})

modalCallForm.querySelector(".modal").addEventListener("click", function(event){
    event._isClick = true;
})
modalCallForm.addEventListener('click', function(event){
    if(event._isClick === true) return;
    modalCallForm.classList.remove('modal-parent_open');
})

window.addEventListener('keydown', function(event) {
    if(event.key == 'Escape') {
        modalCallForm.classList.remove('modal-parent_open');
    }
})

// gallery
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,

    navigation: {
        nextEl: '.latest-shots__right-arrow',
        prevEl: '.latest-shots__left-arrow'
    }
})

