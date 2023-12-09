const back = document.querySelector('.back')
const navbar = document.querySelector('.navbar')
const burgerMenu = document.querySelector('.burger-menu')
const burgerMenuVector = document.querySelector('.burger-menu__vector')

window.addEventListener('resize', () => {
  if (window.screen.width > 768) {

    burgerMenuVector.classList.remove('burger-menu__vector_click')
    burgerMenu.lastElementChild.classList.remove('burger-menu__vector_click-last')

    back.classList.remove('navbar__right')
    back.classList.remove('navbar__click')
  }
})
//Слушатель для управления бургер-меню
burgerMenu.addEventListener('click', changeBurgerMenu)
//слушатель для скрытия выдвигающегося меню
back.addEventListener('click', (e) => {
  e.preventDefault()
  if (!e.target.classList.contains('navbar') && !e.target.classList.contains('back')) {
    burgerMenuVector.classList.remove('burger-menu__vector_click')
    burgerMenu.lastElementChild.classList.remove('burger-menu__vector_click-last')
    if (back.classList.contains('navbar__click') && back.classList.contains('navbar__right')) {
      setTimeout(() => {
        back.classList.toggle('navbar__right')
      }, 50)
      setTimeout(() => {
        back.classList.toggle('navbar__click')
      }, 500)
    }

    setTimeout(() => {
      if (e.target.classList.contains('coffee-menu__coffee-cup') || e.target.classList.contains('header__text') && e.target.classList.contains('coffee-menu__text')) {
        document.location.href = e.target
          .parentNode
          .parentNode
          .getAttribute('href')
      } else {
        document.location.href = e.target.parentNode.getAttribute('href')
      }
    }, 500)
  }
})

function changeBurgerMenu() {
  burgerMenuVector.classList.toggle('burger-menu__vector_click')
  burgerMenu.lastElementChild.classList.toggle('burger-menu__vector_click-last')
  if (back.classList.contains('navbar__click') && back.classList.contains('navbar__right')) {
    setTimeout(() => {
      back.classList.toggle('navbar__right')
    }, 50)
    setTimeout(() => {

      back.classList.toggle('navbar__click')
    }, 500)
  } else {
    setTimeout(() => {

      back.classList.toggle('navbar__click')
    }, 50)
    setTimeout(() => {

      back.classList.toggle('navbar__right')
    }, 250)
  }



}
