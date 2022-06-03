export class Player {
    constructor(name) {
        this.name = name
        this.score = 0
    }

    addScore(newScore) {
        this.score += newScore
    }

    saveScore() {

        var storageScore = sessionStorage.getItem("score")
        if (storageScore === null) {
            var arrNewScore = [this.score]
            sessionStorage.setItem("score", JSON.stringify(arrNewScore))
        } else {
            var arrScore = JSON.parse(storageScore)
            arrScore.push(this.score)
            sessionStorage.setItem("score" ,JSON.stringify(arrScore))
        }
    }
}