import "./scss/index.scss"
import Game from "./js/Game"

Game.createCanvas()
Game.initializeGrid([
  [1, 0, 0, 0, 1],
  [1, 0, 0, 1, 0],
  [1, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [1, 0, 0, 1, 1],
])
Game.drawGrid()

document.addEventListener("mousedown", (event) => {
  event.preventDefault()
  console.log(event.button)
  if (event.button === 0) Game.fillCell(event)
  if (event.button === 2) Game.strokeCell(event)
})
