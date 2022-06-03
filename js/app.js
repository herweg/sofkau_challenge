import { questions } from "../data/questions.js"
import { Player } from "../models/Player.js"
import { Quiz } from "../models/Quiz.js"
import { UI } from "../models/UI.js"

function main() {
    const player = new Player(sessionStorage.getItem("name"))
    const quiz = new Quiz(questions, player)
    const ui = new UI()
    renderPage(quiz, ui)
}

const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        quiz.player.saveScore()
        ui.showScore(quiz.player.score)

    } else {
        quiz.getNewQuestion()
        var current = quiz.getCurrentQuestion()
        ui.showLevel(current.level)
        ui.showQuestion(current.text)
        ui.showChoices(current.choices, (currentChoice) => {
            quiz.guess(currentChoice)
            renderPage(quiz, ui)
        })
        ui.showQuit(() => {
            quiz.player.saveScore()
            alert("Tu puntaje fue " + quiz.player.score)
            window.location.replace("http://localhost:5501/index.html")
        })
    }
}

main()