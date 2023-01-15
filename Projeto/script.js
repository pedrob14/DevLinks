function toggleMode() {
  const html = document.documentElement

  /*if(html.classList.contains("light")) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } ou*/

  html.classList.toggle('light') //Dentro da função toogle há esse conceito de add e remover.
}
