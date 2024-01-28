import "./scss/index.scss"
//import { easy, norm, hard } from "./js/levels"
import createElements from "./js/create-elements"

import Game from "./js/Game/Game"
import ref from "./js/ref"
import timer from "./js/timer"
const savedGame = ref({})
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
const canvas = document.getElementById("canvas")

canvas.addEventListener("mousedown", (event) => {
  event.preventDefault()
  let signal = -1

  if (event.button === 0) {
    signal = Game.fillCell(event)
    signal == 2 ? Game.addActionIntoStack(Game.fillCell, event) : null
  }
  if (event.button === 2) {
    signal = Game.strokeHints(event)
    signal == 1 ? Game.addActionIntoStack(Game.strokeHints, event) : null
    signal = Game.strokeCell(event)
    signal == 0 ? Game.addActionIntoStack(Game.strokeCell, event) : null
  }

  if (go.value && (signal == 0 || signal == 2)) {
    timerInterval = setInterval(() => timer(time), 1000)
    go.value = false
  }
})

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyZ" && (event.ctrlKey || event.metaKey)) Game.prevState()
  clearInterval(timerInterval)
})

const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener("click", () => Game.resetGame())
const decisionBtn = document.querySelector(".decision")
decisionBtn.addEventListener("click", () => Game.drawDecision())
const saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", () => {
  savedGame.value.GRID = Game.getGrid()
  savedGame.value.GRIDBuffer = Game.getGridBuffer()
  savedGame.value.rowsHints = Game.getRowsHints()
  savedGame.value.columnsHints = Game.getColumnsHints()
})
// рисует на канвасе состояние после кнопки save game
const continueBtn = document.querySelector(".continue")
continueBtn.addEventListener("click", () => {
  if (JSON.stringify(savedGame.value) != "{}") {
    Game.resetGame()
    Game.setGrid(savedGame.value.GRID)
    Game.setGridBuffer(savedGame.value.GRIDBuffer)
    Game.setRowsHints(savedGame.value.rowsHints)
    Game.setColumnsHints(savedGame.value.columnsHints)
    Game.continueGame()
  }
})

// const easy = document.querySelector("#easy")
// easy.insertAdjacentHTML("beforeend", '<option value="easy">Easy</option>')
export { time }
