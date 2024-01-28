export default function createELements() {
  const body = document.querySelector("body")
  body.insertAdjacentHTML("afterbegin", '<section class="game"><section>')
  body.insertAdjacentHTML("beforeend", '<section class="options"><section>')
  const gameSection = document.querySelector(".game")
  gameSection.insertAdjacentHTML("afterbegin", '<div class="timer">00:00</div>')
  const optionsSection = document.querySelector(".options")
  optionsSection.insertAdjacentHTML(
    "beforeend",
    '<button class="save">Save game</button>',
  )
  optionsSection.insertAdjacentHTML(
    "beforeend",
    '<button class="reset">Reset game</button>',
  )
  optionsSection.insertAdjacentHTML(
    "beforeend",
    '<button class="decision">Decision</button>',
  )
  optionsSection.insertAdjacentHTML(
    "beforeend",
    '<button class="continue">Continue game</button>',
  )
}
