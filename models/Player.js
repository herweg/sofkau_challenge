export class Player {
    constructor(name) {
        this.name = name
        this.score = 0
    }

    addScore(newScore) {
        this.score += newScore
    }

    // saveScore() {

    //     var storageScore = sessionStorage.getItem("score")
    //     if (storageScore === null) {
    //         var arrNewScore = [this.score]
    //         sessionStorage.setItem("score", JSON.stringify(arrNewScore))
    //     } else {
    //         var arrScore = JSON.parse(storageScore)
    //         arrScore.push(this.score)
    //         sessionStorage.setItem("score", JSON.stringify(arrScore))
    //     }
    // }

    saveScore(score) {

        const storageScore = localStorage.getItem("score")
        if (storageScore === null) {
            const arrNewScore = [];
            localStorage.setItem('score', JSON.stringify(arrNewScore))
        }
        let arrSavedScores = JSON.parse(localStorage.getItem('score'));

        const player = {
            name: this.name,
            score: score,
        }
        arrSavedScores.push(player)
        localStorage.setItem('score', JSON.stringify(arrSavedScores))
    }
}
