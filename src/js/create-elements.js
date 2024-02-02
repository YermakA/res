import levels from "./levels"
import { firtEasyLevel } from "../index"
export default function createELements() {
  const body = document.querySelector("body")
  body.insertAdjacentHTML("afterbegin", '<section class="game"></section>')
  body.insertAdjacentHTML("beforeend", '<section class="options"></section>')
  body.insertAdjacentHTML(
    "beforeend",
    `
    <dialog>
      <div class="modal-title"></div>
        <button class="close" type="submit">Закрыть</button>
    </dialog >`,
  )
  const gameSection = document.querySelector(".game")
  gameSection.insertAdjacentHTML("beforeend", "<div class='game-field'></div>")
  const gameField = document.querySelector(".game-field")
  gameField.insertAdjacentHTML("afterbegin", '<div class="timer">00:00</div>')
  gameSection.insertAdjacentHTML(
    "beforeend",
    `<aside class="aside">
      <table class="records">
        <thead>
          <th>Название игры</th>
          <th>Время</th>
          <th>Уровень</th>
        </thead>
        <tbody>
        </tbody>
      </table>
    </aside>`,
  )
  const optionsSection = document.querySelector(".options")
  optionsSection.insertAdjacentHTML(
    "beforeend",
    '<button class="save">Сохранить игру</button>',
  )
  optionsSection.insertAdjacentHTML(
    "beforeend",
    '<button class="reset">Сбросить игру</button>',
  )
  optionsSection.insertAdjacentHTML(
    "beforeend",
    '<button class="decision">Решение</button>',
  )
  optionsSection.insertAdjacentHTML(
    "beforeend",
    '<button class="continue" >Продолжить последнюю игру</button>',
  )
  optionsSection.insertAdjacentHTML(
    "beforeend",
    '<button class="random" >Случайная игра</button>',
  )
  optionsSection.insertAdjacentHTML(
    "beforeend",
    `
    <label>Choose level: </label>
    <select class="level">
      <optgroup id="easy"  label="easy levels 5x5">
      </optgroup>
      <optgroup  id="normal"  label="normal levels 10x10">
      </optgroup>
      <optgroup id="hard" label="hard levels 15x15">
      </optgroup>
    </select>
    `,
  )
  //создание выпадающего списка для выбора уровня
  const easyOpt = document.querySelector("#easy")
  const normalOpt = document.querySelector("#normal")
  const hardOpt = document.querySelector("#hard")
  for (const key in levels) {
    for (let i = 0; i < levels[key].levels.length; i++) {
      if (levels[key].name === "easy") {
        if (firtEasyLevel == i) {
          easyOpt.insertAdjacentHTML(
            "beforeend",
            `<option value="${levels[key].levels[i][0].name}" selected>${levels[key].levels[i][0].name}</option>`,
          )
        } else {
          easyOpt.insertAdjacentHTML(
            "beforeend",
            `<option value="${levels[key].levels[i][0].name}">${levels[key].levels[i][0].name}</option>`,
          )
        }
      } else if (levels[key].name === "normal") {
        normalOpt.insertAdjacentHTML(
          "beforeend",
          `<option value="${levels[key].levels[i][0].name}">${levels[key].levels[i][0].name}</option>`,
        )
      } else if (levels[key].name === "hard") {
        hardOpt.insertAdjacentHTML(
          "beforeend",
          `<option value="${levels[key].levels[i][0].name}">${levels[key].levels[i][0].name}</option>`,
        )
      }
    }
  }
}
