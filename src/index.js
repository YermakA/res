import "./scss/index.scss"
//import { easy, norm, hard } from "./js/levels"
import createElements from "./js/create-elements"

import Game from "./js/Game/Game"
import ref from "./js/ref"
import timer from "./js/timer"

const time = ref(0)
let timerInterval
createElements()
const go = ref(true)
Game.initializeGrid([
  [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1],
  [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
  [0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
  [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
])

document.addEventListener("mousedown", (event) => {
  event.preventDefault()
  let signal = -1

  if (event.button === 0) {
    signal = Game.fillCell(event)
    signal == 2 ? Game.addActionIntoStack(Game.fillCell, event) : null
    if (go.value && signal == 2) {
      timerInterval = setInterval(() => timer(time), 1000)
      go.value = false
    }
  }
  if (event.button === 2) {
    signal = Game.strokeCell(event)
    signal == 0 ? Game.addActionIntoStack(Game.strokeCell, event) : null
    signal = Game.strokeHints(event)
    signal == 1 ? Game.addActionIntoStack(Game.strokeHints, event) : null
  }
})

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyZ" && (event.ctrlKey || event.metaKey)) Game.prevState()
  clearInterval(timerInterval)
})

export { time }
