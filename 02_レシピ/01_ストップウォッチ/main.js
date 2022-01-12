const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = () => {
  count++
  display.textContent = count / 100
}

let id = null

button.onclick = () => {
  if (id === null) {
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
