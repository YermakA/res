import win from "../../assets/audio/win.mp3"
import Game from "../Game/Game"
import { go, onClickCanvas } from "../../index"
import timer from "../timer"
export default function showModalVictory(time) {
  new Audio(win).play()
  const modalTitle = document.querySelector(".modal-title")
  modalTitle.textContent = `Отлично! Вы решили кроссворд за ${time.value} секунд!`
  const dialog = document.querySelector("dialog")
  dialog.showModal()
  const closeBtn = document.querySelector(".close")
  closeBtn.addEventListener("click", () => {
    dialog.close()
    const GRID = Game.getGrid()
    Game.deleteGrid()
    Game.initializeGrid(GRID)
    const canvas = document.getElementById("canvas")
    canvas.addEventListener("mousedown", (e) => onClickCanvas(e))
    time.value = -1
    timer(time)
    go.value = true
  })
}
