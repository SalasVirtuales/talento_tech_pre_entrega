

/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
const button = document.querySelector('.header__button')
const nav    = document.querySelector('.header__nav')
const links = document.querySelectorAll('.header__a')

button.addEventListener('click',function(){
    nav.classList.toggle('header__nav--activo')
})
links.forEach(link => {
    link.addEventListener('click', function() {
        nav.classList.remove('header__nav--activo');
    });
});

