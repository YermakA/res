const navbar = document.querySelector('.navbar')
const burgerMenu = document.querySelector('.burger-menu')
const burgerMenuVector = document.querySelector('.burger-menu__vector')

window.addEventListener('resize', () => {
  if (window.screen.width > 768) {
    navbar.classList.remove('navbar__click')
    burgerMenuVector.classList.remove('burger-menu__vector_click')
    burgerMenu.lastElementChild.classList.remove('burger-menu__vector_click-last')
    navbar.classList.remove('navbar__right')
  }
})



burgerMenu.addEventListener('click', changeBurgerMenu)


function changeBurgerMenu() {
  burgerMenuVector.classList.toggle('burger-menu__vector_click')
  burgerMenu.lastElementChild.classList.toggle('burger-menu__vector_click-last')
  if (navbar.classList.contains('navbar__click') && navbar.classList.contains('navbar__right')) {
    setTimeout(() => {
      navbar.classList.toggle('navbar__right')
    }, 50)
    setTimeout(() => {
      navbar.classList.toggle('navbar__click')
    }, 500)
  } else {
    setTimeout(() => {
      navbar.classList.toggle('navbar__click')
    }, 50)
    setTimeout(() => {
      navbar.classList.toggle('navbar__right')
    }, 250)
  }



}
