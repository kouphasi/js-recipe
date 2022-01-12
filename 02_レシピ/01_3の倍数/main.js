const number = 100
const genkiFunction = () => {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!!")
    } else {
      console.log(n)
    }
  }
}

genkiFunction(number)
