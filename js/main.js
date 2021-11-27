new fullpage('#fullpage', {
    anchors: ['first', 'about', 'second', 'power', 'third', 'characteristics', 'fourth', 'tecnology', 'fifth', 'control'],
    menu: '#menu',
    navigation: true,
});

let section = document.querySelector('.section.active')
if (section.classList.contains('section__dark')) {
    menu.classList.add('white')
}

let burger = document.querySelector('.burger')
let navMenu = document.querySelector('.nav__list')
burger.addEventListener('click', function () {
    navMenu.classList.toggle('nav__list--active')
    if (navMenu.classList.contains('nav__list--active')) {
        burger.classList.add('burger--active')
    } else {
        burger.classList.remove('burger--active')
    }

})