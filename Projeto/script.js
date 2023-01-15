function toggleMode() {
  const html = document.documentElement

  /*if(html.classList.contains("light")) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } ou*/
  html.classList.toggle("light") //Dentro da função toogle há esse conceito de add e remover.~

  // pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem e txt
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem e txt light
    //Add ou modificar um atributo. Aqui no caso a imagem e txt!
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Pedro Farias sério, usando camisa jeans, barba e fundo borrado."
    )
  } else {
    //se tiver sem light mode, manter a imagem e txt normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Pedro Farias sorrindo, usando camisa azul, barba e fundo branco."
    )
  }
}
