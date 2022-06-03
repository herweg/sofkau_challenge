import { Player } from "./Player.js"
import { Question } from "./Question.js"


export class Quiz {
    questionIndex = 0
    questionsByLevel = []
    currentQuestion = new Question()

    constructor(questions, player) {
        this.questions = questions
        this.player = player
        this.setQuestionsByLevels()
    }

    getNewQuestion() {
        var maxLevel = this.questionsByLevel[this.questionsByLevel.length - 1].level
        var minLevel = this.questionsByLevel[0].level
        this.currentQuestion = this.questionsByLevel[this.questionIndex].questions[Math.floor(Math.random() * (maxLevel - minLevel)) + minLevel]
    }

    getCurrentQuestion() {
        return this.currentQuestion
    }

    isEnded() {
        return this.questionIndex > 4
    }

    setQuestionsByLevels() {
        for (let i = 1; i <= 5; i++) {
            this.questionsByLevel.push({
                level: i,
                questions: this.questions.filter(q => q.level == i)
            })
        }
    }

    guess(answer) {
        if (this.getCurrentQuestion().correctAnswer(answer)) {

            this.player.addScore(this.getCurrentQuestion().level * 100)
            this.questionIndex += 1
        } else {
            this.endGame()
        }
    }

    endGame() {
        alert("Perdiste")
        alert("Tu puntuacion era: " + this.player.score)
        window.location.replace("http://localhost:5501/index.html")
    }
}