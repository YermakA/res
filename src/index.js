import "./scss/index.scss"
import levels from "./js/levels"
import createElements from "./js/create-elements"
import getCountGridValues from "./js/Game/getCountGridValues"
import checkVictory from "./js/Game/checkVictory"
import Game from "./js/Game/Game"
import ref from "./js/ref"
import timer from "./js/timer"
const savedGame = ref({})
let count = 0
let countGrid = 0
const firtEasyLevel = Math.round(Math.random() * 4)
const time = ref(0)
const go = ref(true)
if (localStorage.getItem("savedGame")) {
  savedGame.value = JSON.parse(localStorage.getItem("savedGame"))
}
let timerInterval
createElements()

Game.initializeGrid(levels.easy.levels[firtEasyLevel][1])
countGrid = getCountGridValues(levels.easy.levels[firtEasyLevel][1])
const canvas = document.getElementById("canvas")

function onClickCanvas(event) {
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

  count = checkVictory(Game.getGrid(), Game.getGridBuffer())
  if (count == countGrid) console.log("victory")
}

function keyDownCtrlZ(event) {
  if (event.code == "KeyZ" && (event.ctrlKey || event.metaKey)) Game.prevState()
  clearInterval(timerInterval)
}
canvas.addEventListener("mousedown", (e) => onClickCanvas(e))
document.addEventListener("keydown", (event) => keyDownCtrlZ(event))

const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener("click", () => {
  Game.resetGame()
  time.value = -1
  clearInterval(timerInterval)
  timer(time)
  go.value = true
})
const decisionBtn = document.querySelector(".decision")
decisionBtn.addEventListener("click", () => Game.drawDecision())
//сохраняет игру
const saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", () => {
  savedGame.value.GRID = Game.getGrid()
  savedGame.value.GRIDBuffer = Game.getGridBuffer()
  savedGame.value.rowsHints = Game.getRowsHints()
  savedGame.value.columnsHints = Game.getColumnsHints()
  savedGame.value.time = time.value
  const select = document.querySelector("select.level")
  savedGame.value.name = select.options[select.selectedIndex].value
  savedGame.value.count = count
  savedGame.value.countGrid = countGrid
  localStorage.setItem("savedGame", JSON.stringify(savedGame.value))
})
// рисует на канвасе состояние после нажатия кнопки save game
const continueBtn = document.querySelector(".continue")
continueBtn.addEventListener("click", () => {
  if (JSON.stringify(savedGame.value) != "{}") {
    Game.deleteGrid()
    Game.initializeGrid(savedGame.value.GRID)
    Game.setGridBuffer(savedGame.value.GRIDBuffer)
    Game.setRowsHints(savedGame.value.rowsHints)
    Game.setColumnsHints(savedGame.value.columnsHints)
    Game.continueGame()
    countGrid = savedGame.value.countGrid
    count = savedGame.value.count
    time.value = savedGame.value.time - 1
    timer(time)
    clearInterval(timerInterval)
    go.value = true
    const canvas = document.getElementById("canvas")
    canvas.addEventListener("mousedown", (e) => onClickCanvas(e))

    const selectElement = document.querySelector(
      `select.level option[value="${savedGame.value.name}"]`,
    )
    const select = document.querySelector("select.level")
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === selectElement.value)
        select.options.selectedIndex = i
    }
  }
})

const selectElement = document.querySelector(".level")
//change level
selectElement.addEventListener("change", (event) => {
  for (const key in levels) {
    for (let i = 0; i < levels[key].levels.length; i++) {
      if (levels[key].levels[i][0].name === event.target.value) {
        Game.deleteGrid()
        Game.initializeGrid(levels[key].levels[i][1])
        const canvas = document.getElementById("canvas")
        canvas.addEventListener("mousedown", (e) => onClickCanvas(e))
        clearInterval(timerInterval)
        go.value = true
        time.value = -1
        timer(time)
        countGrid = getCountGridValues(levels[key].levels[i][1])
        count = 0
      }
    }
  }
})
export { time, firtEasyLevel }
