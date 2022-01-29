const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choicesContainer = document.getElementById("choices-container")
// const choice1 = document.getElementById("choice-1")
// const choice2 = document.getElementById("choice-2")
// const choice3 = document.getElementById("choice-3")
// const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

/*
choice1.onclick = function() {
  feedback.textContent =
    "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
}
choice2.onclick = function() {
  feedback.textContent =
    "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
}
choice3.onclick = function() {
  feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
}
*/
const feedbacks = [
  "残念！月は、地球の衛星だよ",
  "残念！エウロパは別の木星の衛星だよ",
  "正解！ガニメデは、木星の第三惑星だよ！",
  "残念！イオは別の木星の衛星だよ",
]
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "月",
      feedback: feedbacks[0],
    },
    {
      text: "エウロパ",
      feedback: feedbacks[1],
    },
    {
      text: "ガニメデ",
      feedback: feedbacks[2],
    },
    {
      text: "イオ",
      feedback: feedback[3],
    },
  ],
}

let button

const reloadQuiz = () => {
  quizText.textContent = "Q. " + quiz.text
  quizImage.src = "./images/" + quiz.image

  for (let i = 0; i < quiz.choices.length; i++) {
    button = document.createElement("button")
    button.textContent = quiz.choices[i].text
    button.onclick = () => {
      choose(i)
    }
    choicesContainer.append(button)
  }

  // choice1.textContent = quiz.choices[0].text
  // choice2.textContent = quiz.choices[1].text
  // choice3.textContent = quiz.choices[2].text
  // choice4.textContent = quiz.choices[3].text
}

const choose = function (choiceNumber) {
  feedback.textContent = feedbacks[choiceNumber]
}

// choice1.onclick = function () {
//   // ゴリアテを選択
//   choose(0)
// }
// choice2.onclick = function () {
//   // ゼニガメを選択
//   choose(1)
// }
// choice3.onclick = function () {
//   // ガニメデを選択
//   choose(2)
// }
// choice4.onclick = function () {
//   choose(3)
// }

reloadQuiz()
