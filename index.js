const btnHamburguer = document.querySelector('.btn-hamburguer')
const btnClose = document.querySelector('.btn-close')
const menuMobile = document.querySelector('.menu')

btnHamburguer.addEventListener("click", function() {
    btnHamburguer.classList.add('hidden-none')
    btnClose.classList.remove('hidden-none')
    menuMobile.classList.remove('hidden')
})

btnClose.addEventListener("click", function() {
    btnClose.classList.add('hidden-none')
    btnHamburguer.classList.remove('hidden-none')
    menuMobile.classList.add('hidden')
})