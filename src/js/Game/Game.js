import two from "../../assets/audio/two.mp3"
import one from "../../assets/audio/one.mp3"
import three from "../../assets/audio/three.mp3"
export default class Game {
  static actionsStack = []
  static gridLength = 0
  static GRIDBuffer
  static GRID
  static ceilSize = 20
  static rowCeils = []
  static columnCeils = []
  static canvasWidth = 0
  static canvasHeight = 0
  static lineGapY = 5
  static lineGapX = 5
  static maxRowLength = 0
  static maxColumnLength = 0
  // Инициализирует всё необходимое
  static initializeGrid(grid) {
    this.GRID = grid
    this.gridLength = grid.length
    // создаём и заполняем буфер сетки нулями
    this.GRIDBuffer = Array(this.gridLength)
      .fill(0)
      .map(() => Array(this.gridLength).fill(0))
    //получаем подсказки для рисования строк и столбцов
    /*1.*/ this.#setRowsHints()
    /*2.*/ this.#setColumnsHints()
    /*2.*/ this.#setCanvasSize()
    // создаём канвас и рисуем сетку
    /*3.*/ this.#createCanvas()
    /*4.*/ this.#drawHints()
    /*4.*/ this.#drawGrid()
    /*4.*/ this.#drawGaps()
    // убирает действие правой кнопки мыши по умолчанию
    const canvas = document.getElementById("canvas")
    canvas.addEventListener(
      "contextmenu",
      (event) => {
        event.preventDefault()
      },
      false,
    )
  }
  static #setCanvasSize() {
    this.canvasHeight =
      (this.gridLength + this.maxColumnLength) * this.ceilSize +
      this.lineGapX * Math.round(this.gridLength / this.lineGapX)
    this.canvasWidth =
      (this.gridLength + this.maxRowLength) * this.ceilSize +
      this.lineGapY * Math.round(this.gridLength / this.lineGapY)
  }
  // Создаёт канвас
  static #createCanvas() {
    const canvas = document.createElement("canvas")
    canvas.width = this.canvasWidth
    canvas.height = this.canvasHeight
    canvas.style.border = "1px solid black"
    canvas.id = "canvas"
    document
      .querySelector("body")
      .insertAdjacentHTML("beforeend", canvas.outerHTML)
  }

  // Рисует линии между клетками
  static #drawGaps() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    ctx.lineWidth = 5
    const gap = Math.floor(this.gridLength / 5) * 5
    for (let i = 0; i < this.gridLength; i += 5) {
      const x =
        i * this.ceilSize + this.maxRowLength * this.ceilSize + this.lineGapY
      const y =
        i * this.ceilSize + this.maxColumnLength * this.ceilSize + this.lineGapX
      this.lineGapY += 5
      this.lineGapX += 5
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
      ctx.moveTo(0, y - 2)
      ctx.lineTo(
        this.gridLength * this.ceilSize +
          this.maxRowLength * this.ceilSize +
          gap,
        y - 2,
      )
      ctx.stroke()
    }
    ctx.lineWidth = 1
    this.lineGapY = 5
    this.lineGapX = 5
  }
  // Рисует сетку
  static #drawGrid() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")

    for (let i = 0; i < this.gridLength; i++) {
      const y =
        i * this.ceilSize + this.maxColumnLength * this.ceilSize + this.lineGapX
      for (let j = 0; j < this.gridLength; j++) {
        ctx.strokeStyle = "#000"
        const x =
          j * this.ceilSize + this.maxRowLength * this.ceilSize + this.lineGapY
        ctx.strokeRect(x, y, this.ceilSize, this.ceilSize)
        ctx.fillStyle = "#fff"
        ctx.fillRect(x + 2, y + 2, this.ceilSize - 3, this.ceilSize - 3)
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
    const canvas = document.getElementById("canvas")
    const left = canvas.getBoundingClientRect().left
    const top = canvas.getBoundingClientRect().top
    const offsetX = event.clientX - left
    const offsetY = event.clientY - top
    const ctx = canvas.getContext("2d")
    let signal = -1
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
            new Audio(one).play()
            ctx.fillRect(x + 2, y + 2, this.ceilSize - 3, this.ceilSize - 3)
            signal = 2
          } else {
            this.GRIDBuffer[i][j] = 1
            ctx.fillStyle = "#000"
            new Audio(two).play()
            ctx.fillRect(x + 2, y + 2, this.ceilSize - 4, this.ceilSize - 4)
            signal = 2
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
    return signal
  }

  static strokeCell(event) {
    const canvas = document.getElementById("canvas")
    const left = canvas.getBoundingClientRect().left
    const top = canvas.getBoundingClientRect().top
    const offsetX = event.clientX - left
    const offsetY = event.clientY - top
    const ctx = canvas.getContext("2d")
    let signal = -1
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
            new Audio(one).play()
            ctx.fillRect(x + 2, y + 2, this.ceilSize - 3, this.ceilSize - 3)
            signal = 0
          } else {
            this.GRIDBuffer[i][j] = 2
            new Audio(three).play()
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
            signal = 0
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
    this.lineGapY = 5
    this.lineGapX = 5
    return signal
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
      if (this.maxColumnLength < this.columnCeils[i].length) {
        this.maxColumnLength = this.columnCeils[i].length
      }
    }
  }

  static getRowsHints() {
    return this.rowCeils
  }

  static getColumnsHints() {
    return this.columnCeils
  }

  static #drawHints() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")

    //отрисовываем подсказки для колонок
    for (let i = 0; i < this.columnCeils.length; i++) {
      for (let j = 0; j < this.maxColumnLength; j++) {
        const x =
          i * this.ceilSize + this.maxRowLength * this.ceilSize + this.lineGapX
        const y = j * this.ceilSize
        ctx.strokeRect(x, y, this.ceilSize, this.ceilSize)
        ctx.fillStyle = "#cccccc"
        ctx.fillRect(x + 1, y + 1, this.ceilSize - 2, this.ceilSize - 2)
      }
      if ((i + 1) % 5 == 0) {
        this.lineGapX += 5
      }
    }
    this.lineGapX = 5
    // отрисовываем числа для колонок
    for (let i = 0; i < this.columnCeils.length; i++) {
      let numberLoc = this.maxColumnLength - 1
      for (let j = this.maxColumnLength - 1; j >= 0; j--) {
        const x =
          i * this.ceilSize + this.maxRowLength * this.ceilSize + this.lineGapX
        const y = this.ceilSize * numberLoc

        if (this.columnCeils[i][j]) {
          ctx.fillStyle = "black"
          ctx.font = "bold 14px Arial"
          ctx.textAlign = "left"
          ctx.textBaseline = "top"
          this.columnCeils[i][j] > 9
            ? ctx.fillText(this.columnCeils[i][j], x + 2, y + 5)
            : ctx.fillText(this.columnCeils[i][j], x + 6, y + 5)
          numberLoc -= 1
        }
      }
      if ((i + 1) % 5 == 0) {
        this.lineGapX += 5
      }
    }

    //отрисовываем подсказки для строк
    for (let i = 0; i < this.rowCeils.length; i++) {
      for (let j = 0; j < this.maxRowLength; j++) {
        const x = j * this.ceilSize

        const y =
          i * this.ceilSize +
          this.maxColumnLength * this.ceilSize +
          this.lineGapY
        ctx.strokeRect(x, y, this.ceilSize, this.ceilSize)
        ctx.fillStyle = "#cccccc"
        ctx.fillRect(x + 1, y + 1, this.ceilSize - 2, this.ceilSize - 2)
      }
      if ((i + 1) % 5 == 0) {
        this.lineGapY += 5
      }
    }
    // numbers for rows
    this.lineGapY = 5
    for (let i = 0; i < this.rowCeils.length; i++) {
      let numberLoc = this.maxRowLength - 1
      for (let j = this.maxRowLength - 1; j >= 0; j--) {
        const x = this.ceilSize * numberLoc
        const y =
          i * this.ceilSize +
          this.maxColumnLength * this.ceilSize +
          this.lineGapY

        if (this.rowCeils[i][j]) {
          ctx.fillStyle = "black"
          ctx.font = "bold 14px Arial"
          ctx.textAlign = "left"
          ctx.textBaseline = "top"
          this.rowCeils[i][j] > 9
            ? ctx.fillText(this.rowCeils[i][j], x + 2, y + 5)
            : ctx.fillText(this.rowCeils[i][j], x + 6, y + 5)
          numberLoc -= 1
        }
      }
      if ((i + 1) % 5 == 0) {
        this.lineGapY += 5
      }
    }
    this.lineGapY = 5
    this.lineGapX = 5
  }
  // зачеркнуть подсказку
  static strokeHints(event) {
    const canvas = document.getElementById("canvas")
    const left = canvas.getBoundingClientRect().left
    const top = canvas.getBoundingClientRect().top
    const offsetX = event.clientX - left
    const offsetY = event.clientY - top
    const ctx = canvas.getContext("2d")
    let signal = -1
    if (
      offsetX > this.maxRowLength * this.ceilSize &&
      offsetY < this.maxColumnLength * this.ceilSize
    ) {
      for (let i = 0; i < this.columnCeils.length; i++) {
        let numberLoc = this.maxColumnLength - 1
        for (let j = this.maxColumnLength - 1; j >= 0; j--) {
          const x =
            i * this.ceilSize +
            this.maxRowLength * this.ceilSize +
            this.lineGapX
          const y = this.ceilSize * numberLoc
          if (this.columnCeils[i][j]) {
            if (
              offsetX > x &&
              offsetX < x + this.ceilSize &&
              offsetY > y &&
              offsetY < y + this.ceilSize
            ) {
              if (typeof this.columnCeils[i][j] == "string") {
                new Audio(one).play()
                this.columnCeils[i][j] = Number(this.columnCeils[i][j])
                ctx.fillStyle = "#cccccc"
                ctx.fillRect(x + 1, y + 1, this.ceilSize - 2, this.ceilSize - 2)
                ctx.fillStyle = "black"
                ctx.font = "bold 14px Arial"
                ctx.textAlign = "left"
                ctx.textBaseline = "top"
                this.columnCeils[i][j] > 9
                  ? ctx.fillText(this.columnCeils[i][j], x + 2, y + 5)
                  : ctx.fillText(this.columnCeils[i][j], x + 6, y + 5)
                signal = 1
              } else {
                new Audio(three).play()
                this.columnCeils[i][j] = this.columnCeils[i][j].toString()
                ctx.beginPath()
                ctx.strokeStyle = "#fff"
                ctx.lineWidth = 2
                ctx.moveTo(x + 3, y + 3)
                ctx.lineTo(x + this.ceilSize - 3, y + this.ceilSize - 3)
                ctx.stroke()
                ctx.beginPath()
                ctx.moveTo(x + 3, y + this.ceilSize - 3)
                ctx.lineTo(x + this.ceilSize - 3, y + 3)
                ctx.stroke()
                ctx.strokeStyle = "#000"
                signal = 1
              }
            }
            numberLoc -= 1
          }
        }
        if ((i + 1) % 5 == 0) {
          this.lineGapX += 5
        }
      }
    } else if (
      offsetX < this.maxRowLength * this.ceilSize &&
      offsetY > this.maxColumnLength * this.ceilSize
    ) {
      //strings
      for (let i = 0; i < this.rowCeils.length; i++) {
        let numberLoc = this.maxRowLength - 1
        for (let j = this.maxRowLength - 1; j >= 0; j--) {
          const x = this.ceilSize * numberLoc
          const y =
            i * this.ceilSize +
            this.maxColumnLength * this.ceilSize +
            this.lineGapY

          if (this.rowCeils[i][j]) {
            if (
              offsetX > x &&
              offsetX < x + this.ceilSize &&
              offsetY > y &&
              offsetY < y + this.ceilSize
            ) {
              if (typeof this.rowCeils[i][j] == "string") {
                new Audio(one).play()
                this.rowCeils[i][j] = Number(this.rowCeils[i][j])
                ctx.fillStyle = "#cccccc"
                ctx.fillRect(x + 1, y + 1, this.ceilSize - 2, this.ceilSize - 2)
                ctx.fillStyle = "black"
                ctx.font = "bold 14px Arial"
                ctx.textAlign = "left"
                ctx.textBaseline = "top"
                this.rowCeils[i][j] > 9
                  ? ctx.fillText(this.rowCeils[i][j], x + 2, y + 5)
                  : ctx.fillText(this.rowCeils[i][j], x + 6, y + 5)
                signal = 1
              } else {
                new Audio(three).play()
                this.rowCeils[i][j] = this.rowCeils[i][j].toString()
                ctx.beginPath()
                ctx.strokeStyle = "#fff"
                ctx.lineWidth = 2
                ctx.moveTo(x + 3, y + 3)
                ctx.lineTo(x + this.ceilSize - 3, y + this.ceilSize - 3)
                ctx.stroke()
                ctx.beginPath()
                ctx.moveTo(x + 3, y + this.ceilSize - 3)
                ctx.lineTo(x + this.ceilSize - 3, y + 3)
                ctx.stroke()
                ctx.strokeStyle = "#000"
                signal = 1
              }
            }
            numberLoc -= 1
          }
        }
        if ((i + 1) % 5 == 0) {
          this.lineGapY += 5
        }
      }
    }

    this.lineGapY = 5
    this.lineGapX = 5
    return signal
  }

  static addActionIntoStack(func, event) {
    const { clientX, clientY } = event
    this.actionsStack.push([func, { clientX, clientY }])
  }

  static prevState() {
    const prev = this.actionsStack.pop()

    if (prev) {
      prev[0].call(Game, prev[1])
    }
  }

  static getDecision() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    for (let i = 0; i < this.gridLength; i++) {
      const y =
        i * this.ceilSize + this.maxColumnLength * this.ceilSize + this.lineGapX
      for (let j = 0; j < this.gridLength; j++) {
        const x =
          j * this.ceilSize + this.maxRowLength * this.ceilSize + this.lineGapY
        if (this.GRID[i][j] === 1) {
          ctx.fillStyle = "#000"
          ctx.fillRect(x + 2, y + 2, this.ceilSize - 4, this.ceilSize - 4)
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

  static resetGame() {
    this.GRIDBuffer = Array(this.gridLength)
      .fill(0)
      .map(() => Array(this.gridLength).fill(0))
    this.#drawHints()
    this.#drawGrid()
    this.#drawGaps()
  }

  static continueGame() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    for (let i = 0; i < this.gridLength; i++) {
      const y =
        i * this.ceilSize + this.maxColumnLength * this.ceilSize + this.lineGapX
      for (let j = 0; j < this.gridLength; j++) {
        const x =
          j * this.ceilSize + this.maxRowLength * this.ceilSize + this.lineGapY
        if (this.GRIDBuffer[i][j] === 1) {
          ctx.fillStyle = "#000"
          ctx.fillRect(x + 2, y + 2, this.ceilSize - 4, this.ceilSize - 4)
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
}
