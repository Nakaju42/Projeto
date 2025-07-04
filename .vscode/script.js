function toggleMode() {
  const html = document.documentElement //está pegando o html
  html.classList.toggle("light") //está fazendo a troca das classes

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Avatar 3.png")
  } else {
    //manter a imagem original
    img.setAttribute("src", "./assets/avatar.png")
  }
}
