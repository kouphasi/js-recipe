const MemoInput = document.getElementById("memo-input")
const AddButton = document.getElementById("add-button")
const MemoContainer = document.getElementById("memo-container")
// console.dir(MemoInput)

const doit = () => {
  const MemoElement = MemoInput.value

  const div = document.createElement("div")
  const element = document.createElement("span")
  const delete_button = document.createElement("button")
  delete_button.textContent = "削除"
  delete_button.onclick = () => {
    div.remove()
  }
  element.textContent = MemoElement
  //   console.log(NewMemo)
  MemoContainer.appendChild(div)
  div.append(element)
  div.append(delete_button)
  console.log(div)
  MemoInput.value = "" //発展１
}

AddButton.onclick = () => {
  doit() //発展２
}
