export default class Game {
  static gridLength = 0
  static GRIDBuffer
  static GRID
  static ceilSize = 20
  // Создаёт канвас
  static createCanvas() {
    const canvas = document.createElement("canvas")
    canvas.width = 300
    canvas.height = 300
    canvas.style.border = "1px solid black"
    canvas.id = "canvas"
    document
      .querySelector("body")
      .insertAdjacentHTML("beforeend", canvas.outerHTML)
  }
  // Создаёт Буфер сетки и заполняет его нулями
  static initializeGrid(grid) {
    this.GRID = grid
    this.gridLength = grid.length
    this.GRIDBuffer = Array(this.gridLength)
      .fill(0)
      .map(() => Array(this.gridLength).fill(0))
    console.log(this.GRIDBuffer)
  }
  // Рисует сетку
  static drawGrid() {
    const canvas = document.getElementById("canvas")
    // убирает действие правой кнопки мыши по умолчанию
    canvas.addEventListener(
      "contextmenu",
      (event) => {
        event.preventDefault()
      },
      false,
    )
    const ctx = canvas.getContext("2d")

    for (let i = 0; i < this.GRID.length; i++) {
      const y = i * this.ceilSize
      for (let j = 0; j < this.GRID.length; j++) {
        ctx.strokeStyle = "#000"

        const x = j * this.ceilSize
        ctx.strokeRect(x, y, this.ceilSize, this.ceilSize)
      }
    }
  }
  // Изменяет буфер и клетку на канвасе
  static fillCell(event) {
    const canvas = document.getElementById("canvas")
    const left = canvas.getBoundingClientRect().left
    const top = canvas.getBoundingClientRect().top
    const offsetX = event.clientX - left
    const offsetY = event.clientY - top
    const ctx = canvas.getContext("2d")
    for (let i = 0; i < this.gridLength; i++) {
      const y = i * this.ceilSize
      for (let j = 0; j < this.gridLength; j++) {
        const x = j * this.ceilSize
        if (
          offsetX > x &&
          offsetX < x + this.ceilSize &&
          offsetY > y &&
          offsetY < y + this.ceilSize
        ) {
          if (this.GRIDBuffer[i][j] === 1) {
            this.GRIDBuffer[i][j] = 0
            ctx.fillStyle = "#fff"
            ctx.fillRect(x, y, this.ceilSize, this.ceilSize)
            ctx.strokeStyle = "#000"
            ctx.strokeRect(x, y, this.ceilSize, this.ceilSize)
          } else {
            this.GRIDBuffer[i][j] = 1
            ctx.fillStyle = "#000"
            ctx.fillRect(x, y, this.ceilSize, this.ceilSize)
            break
          }
        }
      }
    }
  }

  static strokeCell(event) {
    const canvas = document.getElementById("canvas")
    const left = canvas.getBoundingClientRect().left
    const top = canvas.getBoundingClientRect().top
    const offsetX = event.clientX - left
    const offsetY = event.clientY - top
    console.log(offsetX, " ", offsetY)
    const ctx = canvas.getContext("2d")
    for (let i = 0; i < this.gridLength; i++) {
      const y = i * this.ceilSize
      for (let j = 0; j < this.gridLength; j++) {
        const x = j * this.ceilSize
        if (
          offsetX > x &&
          offsetX < x + this.ceilSize &&
          offsetY > y &&
          offsetY < y + this.ceilSize
        ) {
          if (this.GRIDBuffer[i][j] === 2) {
            this.GRIDBuffer[i][j] = 0
            ctx.fillStyle = "#fff"
            ctx.fillRect(x, y, this.ceilSize, this.ceilSize)
            ctx.strokeStyle = "#000"
            ctx.strokeRect(x, y, this.ceilSize, this.ceilSize)
          } else {
            this.GRIDBuffer[i][j] = 2
            ctx.fillStyle = "#fff"
            ctx.fillRect(x, y, this.ceilSize, this.ceilSize)
            ctx.strokeStyle = "#000"
            ctx.strokeRect(x, y, this.ceilSize, this.ceilSize)
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x + this.ceilSize, y + this.ceilSize)
            ctx.lineTo(x, y + this.ceilSize)
            ctx.lineTo(x + this.ceilSize, y)
            ctx.stroke()
          }
        }
      }
    }
  }
}
