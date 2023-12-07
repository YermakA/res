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
const slideRight = () => {
  clearInterval(cellFillingInterval)
  const tapeLength = 48 * slides.length
  position += 48
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
  position -= 48;
  if (tapeLength > position) {
    position = 48 * (slides.length - 1)
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

slider.addEventListener('mouseover', () => {
  clearInterval(cellFillingInterval)
  clearInterval(clearCellInterval)
})
slider.addEventListener('mouseout', () => {
  if (intervalToggle) {
    cellFillingInterval = setInterval(cellFilling, cellFillingTime)
  }
  else {
    clearCellInterval = setInterval(clearCell, clearCellTime)
  }
})



cellFillingInterval = setInterval(cellFilling, cellFillingTime)



