export class Question {

    constructor(text, choices, answers, level) {
        this.text = text
        this.choices = choices
        this.answers = answers
        this.level = level
    }

    correctAnswer(choice) {
        return choice === this.answers
    }
}