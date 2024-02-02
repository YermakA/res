import levels from "./levels"
import { firtEasyLevel } from "../index"
export default function createELements() {
  const body = document.querySelector("body")
  // Создание кнопок для переключения цвета темы и заголовка
  body.insertAdjacentHTML(
    "beforeend",
    `
    <header class="header">
    <button class="change-theme">
      <svg
      class="circle-svg"
      width="70.000000" height="70.000000" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<defs>
		<filter id="filter_3_1_dd" x="0.000000" y="0.000000" width="70.000000" height="70.000000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset dx="0" dy="4"/>
			<feGaussianBlur stdDeviation="1.33333"/>
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
			<feBlend mode="normal" in2="shape" result="effect_innerShadow_1"/>
		</filter>
		<filter id="filter_3_2_dd" x="38.000000" y="15.000000" width="20.000000" height="20.000000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset dx="0" dy="4"/>
			<feGaussianBlur stdDeviation="1.33333"/>
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
			<feBlend mode="normal" in2="shape" result="effect_innerShadow_1"/>
		</filter>
	</defs>
	<g filter="url(#filter_3_1_dd)">
		<circle
    id="Oval-1" cx="35.000000" cy="35.000000" r="35.000000" fill="#000000" fill-opacity="1.000000"/>
	</g>
	<g filter="url(#filter_3_2_dd)">
		<circle id="Oval-2" cx="48.000000" cy="25.000000" r="10.000000" fill="#FFFFFF" fill-opacity="1.000000"/>
	</g>
</svg>

      </button>
      <h1 class="title">Nonograms game</h1>
    </header>
  `,
  )
  body.insertAdjacentHTML(
    "beforeend",
    `
    <dialog>
      <div class="modal-title"></div>
        <button class="close" type="submit">Закрыть</button>
    </dialog >`,
  )
  body.insertAdjacentHTML("beforeend", '<section class="options"></section>')

  body.insertAdjacentHTML("beforeend", '<section class="game"></section>')

  //Создание секции игры
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
    '<div class="container options-container"></div>',
  )
  const container = document.querySelector(".options-container")
  container.insertAdjacentHTML(
    "beforeend",
    '<button class="save btn">Сохранить игру</button>',
  )
  container.insertAdjacentHTML(
    "beforeend",
    '<button class="reset btn">Сбросить игру</button>',
  )
  container.insertAdjacentHTML(
    "beforeend",
    '<button class="decision btn">Решение</button>',
  )
  container.insertAdjacentHTML(
    "beforeend",
    '<button class="continue btn" >Продолжить последнюю игру</button>',
  )
  container.insertAdjacentHTML(
    "beforeend",
    '<button class="random btn" >Случайная игра</button>',
  )
  container.insertAdjacentHTML(
    "beforeend",
    `
    <div>
      <label class="level-label">Choose level: </label>
      <select class="level">
        <optgroup id="easy"  label="easy levels 5x5">
        </optgroup>
        <optgroup  id="normal"  label="normal levels 10x10">
        </optgroup>
        <optgroup id="hard" label="hard levels 15x15">
        </optgroup>
      </select>
    </div>
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
