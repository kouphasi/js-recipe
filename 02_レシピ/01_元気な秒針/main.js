const number = 40

const genkiFunction = () => {
  let n = 0

  while (n < number) {
    setInterval(n++, 1000000000) //うまくいかない
    if (n % 3 === 0) {
      console.log(n + "!!!!!!!")
    } else {
      console.log(n)
    }
  }
}

genkiFunction()
