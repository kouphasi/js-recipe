const figure = document.getElementById("figure")

figure.onclick = () => {
  figure.classList.toggle("rounded")
}
document.onkeydown = (e) => {
  console.log(e.key)
  if (e.key === "Enter") {
    figure.classList.toggle("rounded") //発展１
  }
}
