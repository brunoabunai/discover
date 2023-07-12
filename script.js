function toggleMode() {
  // const html = document.documentElement
  const body = document.body
  body.classList.toggle("light")

  // Take tag img
  const img = document.querySelector(".profile img")
  // const switchImage = document.querySelector(".switch button>img")

  if (body.classList.contains("light")) {
    // body.classList.remove('light')
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "avar image light mode, japa com fundo mais claro, com uma roupa mais cinza"
    )

    // switchImage.setAttribute("src", "./assets/sun.svg")
  } else {
    // body.classList.add('light')
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "avatar image dark mode, japa de roupa preta com o fundo laranja"
    )
    // switchImage.setAttribute("src", "./assets/moon-stars.svg")
  }
}
