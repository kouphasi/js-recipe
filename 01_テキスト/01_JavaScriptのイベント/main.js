const button = document.getElementById("button")

const alertMessage = () => {
  alert("クリックしたね")
}

button.onclick = alertMessage

// input 要素と input イベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const sayHello = function () {
  console.log("hello")
}

inputText.oninput = sayHello
inputDate.oninput = sayHello
