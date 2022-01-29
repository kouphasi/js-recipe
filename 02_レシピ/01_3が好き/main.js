const love_3 = (n) => {
  let i_str = ""
  let include3 = false
  for (let i = 0; i < n; i++) {
    include3 = false
    i_str = i.toString()
    if (i % 3 === 0) {
      console.log(`${i}!!!!!!`)
    } else {
      for (let j = 0; j < i_str.length; j++) {
        if (i_str[j] === "3") {
          include3 = true
        }
      }
      if (include3) {
        console.log(`${i}!!!!!!`)
      } else {
        console.log(i)
      }
    }
  }
}

love_3(40)
