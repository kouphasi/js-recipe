const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

/*
addButton.onclick = () => {
  const text = inputElement.value

  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = () => {
    card.remove()
  }

  card.append(deleteButton)

  container.append(card)
  inputElement.value = ""
}
*/

addButton.onclick = () => {
  submit()
}

const submit = () => {
  const card = createCard(inputElement.value)
  container.append(card)

  inputElement.value = ""
}

const createCard = (text) => {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = () => {
    card.remove()
  }
  card.append(deleteButton)

  return card
}

inputElement.onkeydown = (e) => {
  if (e.key === "Enter") {
    submit()
  }
}
