const questions = [
  "What kind of fish is Nemo?",
  "Who is Ariel’s best friend in the Little Mermaid?",
  "Who lives in a pineapple under the sea?",
  "What is the name of the princess in Shrek?",
  "Which school did Harry Potter attend?",
  "Harry Potter’s middle name is what?",
  "What is the name of Ana’s sister in the movie, Frozen?",
  "What kind of animal is Simba?",
  "What kind of pet did Harry Potter have?",
  "What kind of animal is Sonic?",
]
const answers = [
  "Clownfish",
  "Flounder",
  "Spongebob",
  "Fiona",
  "Hogwarts",
  "James",
  "Elsa",
  "Lion",
  "Owl",
  "Hedgehog",
]
//svg elements
const svgGallows = `<svg class="gallows" width="500" height="581" viewBox="0 0 353 581" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="176.337" y="34.6662" width="39" height="199.598" transform="rotate(45 176.337 34.6662)" fill="black" stroke="#FFFEFE" stroke-width="3"></rect>
<rect x="34.5" y="1.5" width="39" height="578" rx="3.5" fill="black" stroke="#FFFEFE" stroke-width="3"></rect>
<rect x="351.5" y="-40.5" width="39" height="450" rx="3.5" transform="rotate(90 351.5 34.5)" fill="black" stroke="#FFFEFE" stroke-width="3"></rect>
<rect x="298" y="75" width="10" height="74" fill="black"></rect>
<rect x="875.5" y="20.5" width="20" height="400" rx="3.5" transform="rotate(90 351.5 34.5)" fill="black" stroke="#FFFEFE" stroke-width="3"></rect>
</svg>
`
const svgBody = `<svg class="SVG SVG-body" width="5" height="131" viewBox="0 0 5 131" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="5" height="131" fill="#909090"/>
</svg>
`
const svgHead = `<svg class="SVG SVG-head" width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50.5" cy="50.5" r="48" fill="white" stroke="#909090" stroke-width="5"/>
</svg>
`
const svgHandOne = `<svg class="SVG SVG-hand-one" width="68" height="81" viewBox="0 0 68 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="63.7964" width="5" height="100" transform="rotate(39.64 63.7964 0)" fill="#909090"/>
</svg>
`
const svgHandTwo = `<svg class="SVG SVG-hand-two" width="68" height="81" viewBox="0 0 68 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="3.18951" width="5" height="100" transform="rotate(-39.6353 0 3.18951)" fill="#909090"/>
</svg>
`
const svgLegOne = `<svg class="SVG SVG-leg-one" width="68" height="81" viewBox="0 0 68 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="63.7964" width="5" height="100" transform="rotate(39.64 63.7964 0)" fill="#909090"/>
</svg>
`
const svgLegTwo = `<svg class="SVG SVG-leg-two" width="68" height="81" viewBox="0 0 68 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="3.18951" width="5" height="100" transform="rotate(-39.6353 0 3.18951)" fill="#909090"/>
</svg>
`
let svgArray = [svgHead, svgBody, svgHandOne, svgHandTwo, svgLegOne, svgLegTwo]
let answer
let guessWord
let mistakes = 0
function showAllImage() {
  const buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        ` 
  <button class="key" id ="${letter}"
      onClick="handleGuess('` +
        letter +
        `')"
      >
        ${letter}

  </button> 
  `,
    )
    .join(" ")

  const body = document.querySelector("body")
  let questionNumber = Math.floor(Math.random() * questions.length)
  let tempNum = sessionStorage.getItem("questionNumber", questionNumber)
  while (questionNumber === Number(tempNum)) {
    questionNumber = Math.floor(Math.random() * questions.length)
  }
  sessionStorage.setItem("questionNumber", questionNumber)
  console.log("СЕКРЕТНОЕ СЛОВО: " + answers[questionNumber])
  guessWord = answers[questionNumber].toLowerCase().split("")
  answer = Array(guessWord.length).fill("_")
  body.innerHTML = `
  <div class="container">
  <div class="section-1">
  ${svgGallows}
  <div class="hangedman">
</div>
  <h1 class="title">HANGMAN GAME</h1>
  </div>
    <div class="section-2">
    <div class="answer"></div>
    <div class="Hint">
    <span>Hint: ${questions[questionNumber]}</span>
    <span>Incorrect guesses: <span class="mistakes-counter" style="color:red">0/6</span></span>
    </div>
      <div class="keyboard">
          ${buttonsHTML}
      </div>
    </div>
  </div>
  `
}
showAllImage()
guessedWord()
function guessedWord() {
  answerEl = document.querySelector(".answer")
  answerEl.textContent =
    answer.join(" ").charAt(0).toUpperCase() + answer.join(" ").slice(1)
  if (!answer.includes("_")) {
    openModal()
  }
}

function handleGuess(chosenLetter) {
  if (mistakes >= 6) {
    return
  }
  answer = answer.map((symbol, i) =>
    chosenLetter === guessWord[i] ? chosenLetter : symbol,
  )
  if (answer.includes(chosenLetter)) {
    guessedWord()
  } else {
    const symbol = document.querySelector(`#${chosenLetter}`)
    symbol.setAttribute("disabled", true)
    document
      .querySelector(".hangedman")
      .insertAdjacentHTML("beforeend", svgArray.shift())
    symbol.style.cssText = "background-color: rgb(169, 185, 255);"
    let mistakesCounter = document.querySelector(".mistakes-counter")
    mistakesCounter.textContent = `${++mistakes}/6`
  }
  if (mistakes >= 6) {
    openModal()
  }
}

document.addEventListener("keyup", (e) => {
  const symbol = document.getElementById(
    e.code.toLowerCase().split("")[e.code.length - 1],
  )
  if (!symbol.getAttribute("disabled")) {
    symbol.style.cssText = "background-color: #495eb8;"
  }
  if (e.code.length <= 4 && e.code.slice(0, 3) === "Key") {
    if (!symbol.getAttribute("disabled")) {
      handleGuess(e.code.toLowerCase().split("")[e.code.length - 1])
    }
  }
})

document.addEventListener("keydown", (e) => {
  if (e.code.length <= 4 && e.code.slice(0, 3) === "Key") {
    const symbol = document.getElementById(
      e.code.toLowerCase().split("")[e.code.length - 1],
    )
    if (!symbol.getAttribute("disabled")) {
      symbol.style.cssText = "background-color: rgb(43, 64, 161);"
    }
  }
})

function openModal() {
  if (mistakes >= 6) {
    document.querySelector("body").insertAdjacentHTML(
      "beforeend",
      ` <dialog id="modal">
    <div class="modal">
    <h2 class="modal-title">You lost!</h2>
    <p class="modal__secret-word">SECRET WORD: ${guessWord.join("")}</p>
    <button onClick="playAgain()" class="modal-btn">play again</button>
    </div>
    </dialog>`,
    )
    document.querySelector("#modal").showModal()
  } else {
    document.querySelector("body").insertAdjacentHTML(
      "beforeend",
      ` <dialog id="modal">
    <div class="modal">
    <h2 class="modal-title">You won!</h2>
    <p class="modal__secret-word">SECRET WORD: ${guessWord.join("")}</p>
    <button onClick="playAgain()" class="modal-btn">play again</button>
    </div>
    </dialog>`,
    )
    document.querySelector("#modal").showModal()
  }
}
function playAgain() {
  document.querySelector("#modal").close()
  svgArray = [svgHead, svgBody, svgHandOne, svgHandTwo, svgLegOne, svgLegTwo]
  mistakes = 0
  showAllImage()
  guessedWord()
}
