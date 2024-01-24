export default class Game {
  static gridLength = 0
  static GRIDBuffer
  static GRID
  static ceilSize = 20
  static rowCeils = []
  static lineGapY = 5
  static lineGapX = 5
  static columnCeils = []
  static maxRowLength = 0

  static maxColumnLength = 0
  // Создаёт канвас
  static #createCanvas() {
    const canvas = document.createElement("canvas")
    canvas.width = 500
    canvas.height = 500
    canvas.style.border = "1px solid black"
    canvas.id = "canvas"
    document
      .querySelector("body")
      .insertAdjacentHTML("beforeend", canvas.outerHTML)
  }
  // Инициализирует всё необходимое
  static initializeGrid(grid) {
    this.#createCanvas()
    this.GRID = grid
    this.gridLength = grid.length
    // создаём и заполняем буфер сетки нулями
    this.GRIDBuffer = Array(this.gridLength)
      .fill(0)
      .map(() => Array(this.gridLength).fill(0))
    //получаем подсказки для рисования строк и столбцов
    this.#setRowsHints()
    this.#setColumnsHints()
    this.#drawGrid()
    this.#drawGaps()
  }
  // Рисует линии между клетками
  static #drawGaps() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    ctx.lineWidth = 5
    const gap = Math.floor(this.gridLength / 5) * 5
    for (let i = 0; i < this.gridLength; i += 5) {
      const x =
        i * this.ceilSize + this.maxColumnLength * this.ceilSize + this.lineGapY

      this.lineGapY += 5
      ctx.beginPath()
      ctx.moveTo(x - 2, 0)
      ctx.lineTo(
        x - 2,
        this.gridLength * this.ceilSize +
          this.maxColumnLength * this.ceilSize +
          gap,
      )
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(0, x - 2)
      ctx.lineTo(
        this.gridLength * this.ceilSize +
          this.maxColumnLength * this.ceilSize +
          gap,
        x - 2,
      )
      ctx.stroke()
    }
    ctx.lineWidth = 1
  }
  // Рисует сетку
  static #drawGrid() {
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

    for (let i = 0; i < this.gridLength; i++) {
      const y =
        i * this.ceilSize + this.maxColumnLength * this.ceilSize + this.lineGapX
      for (let j = 0; j < this.gridLength; j++) {
        ctx.strokeStyle = "#000"
        const x =
          j * this.ceilSize + this.maxRowLength * this.ceilSize + this.lineGapY
        ctx.strokeRect(x, y, this.ceilSize, this.ceilSize)
        if ((j + 1) % 5 == 0) {
          this.lineGapY += 5
        }
      }
      this.lineGapY = 5
      if ((i + 1) % 5 == 0) {
        this.lineGapX += 5
      }
    }
    this.lineGapX = 5
  }
  // Изменяет буфер и клетку на канвасе
  static fillCell(event) {
    console.log(this.gridLength)
    const canvas = document.getElementById("canvas")
    const left = canvas.getBoundingClientRect().left
    const top = canvas.getBoundingClientRect().top
    const offsetX = event.clientX - left
    const offsetY = event.clientY - top
    const ctx = canvas.getContext("2d")
    for (let i = 0; i < this.gridLength; i++) {
      const y =
        i * this.ceilSize + this.maxColumnLength * this.ceilSize + this.lineGapX
      for (let j = 0; j < this.gridLength; j++) {
        const x =
          j * this.ceilSize + this.maxRowLength * this.ceilSize + this.lineGapY
        if (
          offsetX > x &&
          offsetX < x + this.ceilSize &&
          offsetY > y &&
          offsetY < y + this.ceilSize
        ) {
          if (this.GRIDBuffer[i][j] === 1) {
            this.GRIDBuffer[i][j] = 0
            ctx.fillStyle = "#fff"
            ctx.fillRect(x + 2, y + 2, this.ceilSize - 3, this.ceilSize - 3)
          } else {
            this.GRIDBuffer[i][j] = 1
            ctx.fillStyle = "#000"
            ctx.fillRect(x + 2, y + 2, this.ceilSize - 4, this.ceilSize - 4)
            break
          }
        }
        if ((j + 1) % 5 == 0) {
          this.lineGapY += 5
        }
      }
      this.lineGapY = 5
      if ((i + 1) % 5 == 0) {
        this.lineGapX += 5
      }
    }
    this.lineGapX = 5
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
      const y =
        i * this.ceilSize + this.maxColumnLength * this.ceilSize + this.lineGapX
      for (let j = 0; j < this.gridLength; j++) {
        const x =
          j * this.ceilSize + this.maxRowLength * this.ceilSize + this.lineGapY
        if (
          offsetX > x &&
          offsetX < x + this.ceilSize &&
          offsetY > y &&
          offsetY < y + this.ceilSize
        ) {
          if (this.GRIDBuffer[i][j] === 2) {
            this.GRIDBuffer[i][j] = 0
            ctx.fillStyle = "#fff"
            ctx.fillRect(x + 2, y + 2, this.ceilSize - 3, this.ceilSize - 3)
          } else {
            this.GRIDBuffer[i][j] = 2
            ctx.fillStyle = "#fff"
            ctx.fillRect(x + 2, y + 2, this.ceilSize - 3, this.ceilSize - 3)
            ctx.beginPath()
            ctx.moveTo(x + 3, y + 3)
            ctx.lineTo(x + this.ceilSize - 3, y + this.ceilSize - 3)
            ctx.stroke()
            ctx.beginPath()
            ctx.moveTo(x + 3, y + this.ceilSize - 3)
            ctx.lineTo(x + this.ceilSize - 3, y + 3)
            ctx.stroke()
          }
        }
        if ((j + 1) % 5 == 0) {
          this.lineGapY += 5
        }
      }
      this.lineGapY = 5
      if ((i + 1) % 5 == 0) {
        this.lineGapX += 5
      }
    }
    this.lineGapX = 5
  }

  static #setRowsHints() {
    for (let i = 0; i < this.gridLength; i++) {
      const tempArr = []
      let count = 0
      for (let j = 0; j < this.gridLength; j++) {
        if (this.GRID[i][j] === 1 && j + 1 === this.gridLength) {
          count++
          tempArr.push(count)
        } else if (this.GRID[i][j] === 1) {
          count++
        } else if (j + 1 === this.gridLength && count > 0) {
          tempArr.push(count)
        } else if (this.GRID[i][j] === 0 && count > 0) {
          tempArr.push(count)
          count = 0
        }
      }

      this.rowCeils.push(tempArr)
    }

    for (let i = 0; i < this.gridLength; i++) {
      if (this.maxRowLength < this.rowCeils[i].length) {
        this.maxRowLength = this.rowCeils[i].length
      }
    }
  }

  static #setColumnsHints() {
    for (let j = 0; j < this.gridLength; j++) {
      const tempArr = []
      let count = 0
      for (let i = 0; i < this.gridLength; i++) {
        if (this.GRID[i][j] === 1 && i + 1 === this.gridLength) {
          count++
          tempArr.push(count)
        } else if (this.GRID[i][j] === 1) {
          count++
        } else if (i + 1 === this.gridLength && count > 0) {
          tempArr.push(count)
        } else if (this.GRID[i][j] === 0 && count > 0) {
          tempArr.push(count)
          count = 0
        }
      }

      this.columnCeils.push(tempArr)
    }
    for (let i = 0; i < this.gridLength; i++) {
      if (this.maxColumnLength < this.rowCeils[i].length) {
        this.maxColumnLength = this.rowCeils[i].length
      }
    }
  }

  static getRowsHints() {
    return this.rowCeils
  }

  static getColumnsHints() {
    return this.columnCeils
  }

  static #drawHints() {}
}
