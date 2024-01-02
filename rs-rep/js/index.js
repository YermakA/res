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

function showAllImage() {
  const buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) => ` 
  <button class="key">
      <span>
        ${letter}
      </span>
  </button> 
  `,
    )
    .join(" ")

  const body = document.querySelector("body")

  body.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="keyboard">

      ${buttonsHTML}

  </div>
  `,
  )
}
showAllImage()
