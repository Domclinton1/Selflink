function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a imagem
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adcionar a imagem light
    img.setAttribute("src", "./assets/Profile.png")
  } else {
    // se tiver sem light mode, manter o normal
    img.setAttribute("src", "./assets/profile2.png")
  }
}
