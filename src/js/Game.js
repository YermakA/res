export default class Game {
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

  static drawGrid() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")

    ctx.beginPath()
    console.log()
    for (let i = 1; i <= 10; i++) {
      const y = i * 15
      for (let j = 1; j <= 10; j++) {
        const x = j * 15
        ctx.strokeRect(x, y, 15, 15)
      }
    }
  }
}
