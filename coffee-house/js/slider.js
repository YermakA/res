let cellFillingInterval
let clearCellInterval
const slides = document.querySelectorAll('div.slide')

const arrowRight = document.querySelector('.slider__arrow-right')
const arrowLeft = document.querySelector('.slider__arrow-left')
const controls = document.querySelectorAll('div.control')
let cellWidth = 0
const changeSLideTime = 4000
const cellFillingTime = changeSLideTime / 100
const clearCellTime = 1
let position = 0
let currentSlide = 0
let intervalToggle = true
let widthDisplacement = 48
window.addEventListener('DOMContentLoaded', () => {
  if (window.screen.width <= 575) {
    widthDisplacement = 34.8
    position = 0
  }
  if (window.screen.width > 575) {
    widthDisplacement = 48
    position = 0
  }
})


window.addEventListener('resize', debounce(resizeSlideplace, 5))


function debounce(resizeF, time) {
  let timeout
  return function func() {
    clearInterval(timeout)
    timeout = setTimeout(resizeF, time)
  }
}

function resizeSlideplace() {
  clearInterval(clearCellInterval)
  clearInterval(cellFillingInterval)
  if (window.screen.width <= 575) {
    widthDisplacement = 34.8
    position = currentSlide * widthDisplacement
    for (const slide of slides) {
      slide.style.left = -position + 'rem'
    }
  }
  if (window.screen.width > 575) {
    widthDisplacement = 48
    position = currentSlide * widthDisplacement
    for (const slide of slides) {
      slide.style.left = -position + 'rem'
    }
  }
  if (intervalToggle) {
    cellFillingInterval = setInterval(cellFilling, cellFillingTime)
  } else {
    clearCellInterval = setInterval(clearCell, clearCellTime)
  }
}

const slideRight = () => {
  clearInterval(cellFillingInterval)
  const tapeLength = widthDisplacement * slides.length
  position += widthDisplacement
  if (tapeLength <= position) {
    position = 0
  }
  for (const slide of slides) {
    slide.style.left = -position + 'rem'
  }

  if (currentSlide === slides.length - 1) {
    currentSlide = 0
  } else {
    currentSlide += 1
  }
  controls.forEach((el, i) => {
    if (i === currentSlide) {
      el.classList.add('control_black')
    }
    else {
      el.classList.remove('control_black')
    }
  })

  cellFillingInterval = setInterval(cellFilling, cellFillingTime)
}

const slideLeft = () => {
  clearInterval(cellFillingInterval)

  const tapeLength = 0;
  position -= widthDisplacement;
  if (tapeLength > position) {
    position = widthDisplacement * (slides.length - 1)
  }
  for (const slide of slides) {
    slide.style.left = -position + 'rem'
  }

  if (currentSlide === 0) {
    currentSlide = 2
  } else {
    currentSlide -= 1
  }
  controls.forEach((el, i) => {
    if (i === currentSlide) {
      el.classList.add('control_black')
    }
    else {
      el.classList.remove('control_black')
    }
  })


  cellFillingInterval = setInterval(cellFilling, cellFillingTime)
}

const changeSlides = (leftOrRight) => {
  clearInterval(cellFillingInterval)
  clearInterval(clearCellInterval)
  clearCellInterval = setInterval(() => clearCell(leftOrRight), clearCellTime)
}

arrowRight.addEventListener('click', () => changeSlides(false))
arrowLeft.addEventListener('click', () => changeSlides(true))




const cellFilling = () => {
  intervalToggle = true
  const controlBlack = document.querySelector('.control_black')
  cellWidth += 1
  if (cellWidth > 100) {
    clearInterval(cellFillingInterval)
    clearCellInterval = setInterval(clearCell, clearCellTime)
  }
  controlBlack.style.width = cellWidth + '%'
}




function clearCell(leftOrRight) {
  intervalToggle = false
  if (cellWidth < 0) {
    clearInterval(clearCellInterval)
    if (!leftOrRight) {
      slideRight()
    }
    if (leftOrRight) {
      slideLeft()
    }
  }
  const controlBlack = document.querySelector('.control_black')
  cellWidth -= 1
  controlBlack.style.width = cellWidth + '%'
}






const slider = document.querySelector('.slider__slide')
let touchStart
slider.addEventListener('mouseover', (e) => {
  e.preventDefault()
  clearInterval(cellFillingInterval)
  clearInterval(clearCellInterval)
})
slider.addEventListener('mouseout', () => {
  if (intervalToggle) {
    clearInterval(cellFillingInterval)
    cellFillingInterval = setInterval(cellFilling, cellFillingTime)
  }
  else {

    clearInterval(clearCellInterval)
    clearCellInterval = setInterval(clearCell, clearCellTime)
  }
})



cellFillingInterval = setInterval(cellFilling, cellFillingTime)


let touchMove
let touchDifference = 0

slider.addEventListener('touchstart', (e) => {
  e.preventDefault()
  touchStart = e.touches[0].clientX
  clearInterval(cellFillingInterval)
  clearInterval(clearCellInterval)
})
slider.addEventListener('touchmove', (e) => {
  clearInterval(cellFillingInterval)
  clearInterval(clearCellInterval)
  touchMove = e.touches[0].clientX
  if (touchMove - touchStart < 0) {
    e.target.closest('.slide').style.transform = `translateX(-20px)`
  } else if (touchMove - touchStart > 0) {
    e.target.closest('.slide').style.transform = `translateX(20px)`
  }
  touchDifference = touchStart - touchMove

})
let touchEnd
slider.addEventListener('touchend', (e) => {
  touchEnd = e.changedTouches[0].clientX
  e.target.closest('.slide').style.transform = `translateX(0px)`
  if (touchDifference !== 0) {
    if (touchEnd < touchStart) {
      clearInterval(clearCellInterval)
      clearCellInterval = setInterval(() => clearCell(false), clearCellTime)
      touchDifference = 0
    }
    if (touchEnd > touchStart) {
      clearInterval(clearCellInterval)
      clearCellInterval = setInterval(() => clearCell(true), clearCellTime)
      touchDifference = 0
    }
  }
  if (intervalToggle) {
    clearInterval(cellFillingInterval)
    cellFillingInterval = setInterval(cellFilling, cellFillingTime)
  }
  else {
    clearInterval(clearCellInterval)
    clearCellInterval = setInterval(clearCell, clearCellTime)
  }
})