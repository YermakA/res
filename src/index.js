import "./scss/index.scss"
import levels from "./js/levels"
import createElements from "./js/create-elements"
import getCountGridValues from "./js/Game/getCountGridValues"
import checkVictory from "./js/Game/checkVictory"
import Game from "./js/Game/Game"
import ref from "./js/ref"
import showModalVictory from "./js/Game/showModalVictory"
import timer from "./js/timer"
import createRecords from "./js/createRecords"
const savedGame = ref({})
const records = []
let count = 0
let theme = true
let decision = false
let countGrid = 0
const firtEasyLevel = Math.round(Math.random() * 4)
const time = ref(0)
const go = ref(true)
let randomVal = -1
let timerInterval
createElements()
if (localStorage.getItem("records")) {
  records.push(...JSON.parse(localStorage.getItem("records")))
  createRecords(records)
  if (records.length > 0) {
    const aside = document.querySelector(".aside")
    aside.style.display = "block"
  }
}
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
  if (count == countGrid) {
    clearInterval(timerInterval)
    showModalVictory(time)
    const record = {
      time: time.value,
    }
    const select = document.querySelector("select.level")
    for (let i = 0; i < select.options.length; i++) {
      if (i === select.options.selectedIndex) {
        record.name = select.options[i].value
        record.level = select.options[i].parentNode.label
      }
    }

    if (records.length == 5) {
      records.pop()
    }
    records.unshift(record)
    createRecords(records)
  }
}

function keyDownCtrlZ(event) {
  if (event.code == "KeyZ" && (event.ctrlKey || event.metaKey)) Game.prevState()
}
canvas.addEventListener("mousedown", (e) => onClickCanvas(e))
document.addEventListener("keydown", (event) => keyDownCtrlZ(event))

const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener("click", () => {
  decision = false
  const GRID = Game.getGrid()
  Game.deleteGrid()
  Game.initializeGrid(GRID)
  const canvas = document.getElementById("canvas")
  canvas.addEventListener("mousedown", (e) => onClickCanvas(e))
  time.value = -1
  clearInterval(timerInterval)
  timer(time)
  go.value = true
})
const decisionBtn = document.querySelector(".decision")

decisionBtn.addEventListener("click", () => {
  if (!decision) {
    const GRID = Game.getGrid()
    Game.deleteGrid()
    Game.initializeGrid(GRID)
    Game.drawDecision()
    decision = true
  } else {
    const GRID = Game.getGrid()
    Game.deleteGrid()
    Game.initializeGrid(GRID)
    const canvas = document.getElementById("canvas")
    canvas.addEventListener("mousedown", (e) => onClickCanvas(e))
    decision = false
  }
})
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
  decision = false
  if (localStorage.getItem("savedGame")) {
    savedGame.value = JSON.parse(localStorage.getItem("savedGame"))
    Game.deleteGrid()
    Game.initializeGrid(savedGame.value.GRID)
    Game.setGridBuffer(savedGame.value.GRIDBuffer)
    Game.setRowsHints(savedGame.value.rowsHints)
    Game.setColumnsHints(savedGame.value.columnsHints)
    Game.continueGame()
    countGrid = savedGame.value.countGrid
    count = savedGame.value.count
    time.value = savedGame.value.time
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
const randomBtn = document.querySelector(".random")
randomBtn.addEventListener("click", () => {
  decision = false
  const select = document.querySelector("select.level")
  let randomNumber = Math.round(Math.random() * 14)
  if (randomVal === randomNumber) {
    randomNumber = Math.round((Math.random() * 14) / 2)
  }
  randomVal = randomNumber
  let gameValue
  for (let i = 0; i < select.options.length; i++) {
    if (i === randomNumber) {
      select.options.selectedIndex = randomNumber
      gameValue = select.options[randomNumber].value
    }
  }

  for (const key in levels) {
    for (let i = 0; i < levels[key].levels.length; i++) {
      if (levels[key].levels[i][0].name === gameValue) {
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

const selectElement = document.querySelector(".level")
//change level
selectElement.addEventListener("change", (event) => {
  decision = false
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
//меняет тему
const themeBtn = document.querySelector(".change-theme")
themeBtn.addEventListener("click", () => {
  const circleSvg = document.querySelector(".circle-svg")
  const Oval1 = document.querySelector("#Oval-1")
  const Oval2 = document.querySelector("#Oval-2")
  let black = "black"
  let white = "white"
  let grey = "grey"
  if (theme) {
    //dark theme
    document.body.classList.add("dark-theme")
    circleSvg.style = ` left:40%; 
  transition: all ease .5s;
  transform: rotate(360deg);`
    Oval1.style.fill = "white"
    Oval2.style.fill = "black"
    black = "#e5e5e5"
    white = "#646c6f"
    grey = "#b8bcb6"
    theme = false
  } else {
    document.body.classList.remove("dark-theme")
    circleSvg.style = ` left:0; 
  transition: all ease .5s;
  transform: rotate(0deg);`
    Oval1.style.fill = "black"
    Oval2.style.fill = "white"
    black = "black"
    white = "white"
    grey = "#cccccc"
    theme = true
  }
  Game.changeColor(black, white, grey)
  const GRID = Game.getGrid()
  const GRIDBuffer = Game.getGridBuffer()
  const rowsHints = Game.getRowsHints()
  const columnsHints = Game.getColumnsHints()
  Game.deleteGrid()
  Game.initializeGrid(GRID)
  Game.setGridBuffer(GRIDBuffer)
  Game.setRowsHints(rowsHints)
  Game.setColumnsHints(columnsHints)
  Game.continueGame()
  const canvas = document.getElementById("canvas")
  canvas.addEventListener("mousedown", (e) => onClickCanvas(e))
})

export { time, firtEasyLevel, go, onClickCanvas, records }
