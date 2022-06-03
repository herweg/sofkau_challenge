import { questions } from "../data/questions.js"
import { Player } from "../models/Player.js"
import { Quiz } from "../models/Quiz.js"
import { Scores } from "../models/Scores.js"
import { UI } from "../models/UI.js"

function main() {
    const player = new Player(sessionStorage.getItem("name"))
    const quiz = new Quiz(questions, player)
    const ui = new UI()
    renderPage(quiz, ui)
}

const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        quiz.player.saveScore(quiz.player.score)
        ui.showScore(quiz.player.score)

    } else {
        const tableScores = new Scores()
        tableScores.addTableScore()
        quiz.getNewQuestion()
        var current = quiz.getCurrentQuestion()
        ui.showLevel(current.level)
        ui.showQuestion(current.text)
        ui.showChoices(current.choices, (currentChoice) => {
            quiz.guess(currentChoice)
            renderPage(quiz, ui)
        })
        ui.showQuit(() => {
            quiz.player.saveScore(quiz.player.score)
            alert("Tu puntaje fue " + quiz.player.score)
            window.location.replace("https://herweg.github.io/sofkau_challenge/index.html")
        })
    }
}

main()
