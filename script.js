function toggleMode() {
  const html = document.documentElement // para acessar o html
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //}else{
  //  html.classList.add("light")
  //}

  html.classList.toggle("light") //esse código faz tudo isso acima
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
