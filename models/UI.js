export class UI {

    showLevel(level) {
        const currentLevelHTML = `
        Nivel ${level}`
        const element = document.getElementById("level")
        element.innerText = currentLevelHTML
    }

    showQuestion(text) {
        const questionTitle = document.getElementById("question")
        questionTitle.innerHTML = text
    }

    showChoices(choices, callback) {
        const choicesContainer = document.getElementById("choices")
        choicesContainer.innerHTML = ""

        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement("button")
            button.innerText = choices[i]
            button.className = "button"
            button.addEventListener("click", () => callback(choices[i]))
            choicesContainer.append(button)
        }
    }

    showScore(score) {
        const quizEndHTML = `
        <h1>Result</h1>
        <h2>Tu puntaje es:${score}</h2>
        <button id="btnQuit" class="button">Salir</button>`
        const quiz = document.getElementById("quiz")
        quiz.innerHTML = quizEndHTML
        const quit = document.getElementById("btnQuit")
        quit.addEventListener("click", () => window.location.replace("https://herweg.github.io/sofkau_challenge/index.html"))
    }

    showQuit(callback) {
        const quit = document.getElementById("quit")
        quit.addEventListener("click", () => callback())
    }
}
