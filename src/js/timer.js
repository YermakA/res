export default function timer(time) {
  const timer = document.querySelector(".timer")
  const value = ++time.value
  const minutes =
    Math.floor(value / 60) >= 10
      ? Math.floor(value / 60)
      : "0" + Math.floor(value / 60)
  const seconds = value % 60 >= 10 ? value % 60 : "0" + (value % 60)
  timer.textContent = minutes + ":" + seconds
}
