import win from "../../assets/audio/win.mp3"
export default function showModalVictory(time) {
  new Audio(win).play()
  const body = document.querySelector("body")
  body.insertAdjacentHTML(
    "beforeend",
    `
    <dialog>

      <div>Отлично! Вы решили кроссворд за ${time.value} секунд!</div>
      <form method="dialog">
        <button class="close" type="submit">Закрыть</button>
      </form>
    </dialog >`,
  )
  const dialog = document.querySelector("dialog")
  dialog.showModal()
}
