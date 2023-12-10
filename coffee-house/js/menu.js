const back = document.querySelector('.back')
const navbar = document.querySelector('.navbar')
const burgerMenu = document.querySelector('.burger-menu')
const burgerMenuVector = document.querySelector('.burger-menu__vector')

window.addEventListener('resize', () => {
  if (window.screen.width > 768) {
    back.removeEventListener('click', backEvent)
    burgerMenuVector.classList.remove('burger-menu__vector_click')
    burgerMenu.lastElementChild.classList.remove('burger-menu__vector_click-last')

    back.classList.remove('navbar__right')
    back.classList.remove('navbar__click')
  } else {
    back.removeEventListener('click', backEvent)
    back.addEventListener('click', backEvent)
  }
})
//Слушатель для управления бургер-меню
burgerMenu.addEventListener('click', changeBurgerMenu)
//слушатель для скрытия  выдвигающимся меню
back.addEventListener('click', backEvent)

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


function backEvent(e) {
  e.preventDefault()
  if (e.target.closest('.navbar__menu-item') || e.target.closest('.menu-link__nav')) {
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
      if (e.target.closest('.menu-link__nav')) {
        document.location.href = e.target.closest('.menu-link__nav').getAttribute('href')
      } else {
        document.location.href = e.target.closest('.navbar__menu-item').getAttribute('href')
      }
    }, 500)
  }
}
