function inputName() {
    let name = prompt("Ingresa tu nombre: ")
    sessionStorage.setItem("name", name)

    window.location.replace("http://localhost:5501/trivia.html")
}

document.getElementById("play").addEventListener("click", () => {
    inputName()
})