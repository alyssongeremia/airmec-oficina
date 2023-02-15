const btnHamburguer = document.querySelector('.hamburguer')
const btnMenu = document.querySelector('.menu')

btnHamburguer.addEventListener('click', function() {
    btnHamburguer.classList.toggle('active')
    btnMenu.classList.toggle('active')
})