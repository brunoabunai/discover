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
    // switchImage.setAttribute("src", "./assets/sun.svg")
  } else {
    // body.classList.add('light')
    img.setAttribute("src", "./assets/avatar.png")
    // switchImage.setAttribute("src", "./assets/moon-stars.svg")
  }
}
