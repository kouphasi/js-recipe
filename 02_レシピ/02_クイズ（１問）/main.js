const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
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
  "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
  "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
  "正解！ガニメデは、木星の第三惑星だよ！",
]
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback: feedbacks[0],
    },
    {
      text: "ゼニガメ",
      feedback: feedbacks[1],
    },
    {
      text: "ガニメデ",
      feedback: feedbacks[2],
    },
  ],
}

const reloadQuiz = () => {
  quizText.textContent = "Q. " + quiz.text
  quizImage.src = "./images/" + quiz.image

  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

const choose = function (choiceNumber) {
  feedback.textContent = feedbacks[choiceNumber]
}

choice1.onclick = function () {
  // ゴリアテを選択
  choose(0)
}
choice2.onclick = function () {
  // ゼニガメを選択
  choose(1)
}
choice3.onclick = function () {
  // ガニメデを選択
  choose(2)
}

reloadQuiz()
