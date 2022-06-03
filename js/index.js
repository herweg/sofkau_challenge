function inputName() {
    let name = prompt("Ingresa tu nombre: ")
    sessionStorage.setItem("name", name)

    window.location.replace("https://herweg.github.io/sofkau_challenge/trivia.html")
}

document.getElementById("play").addEventListener("click", () => {
    inputName()
})
