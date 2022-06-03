export class Scores {
    constructor(scores) {
        this.scores = scores
    }

    addTableScore() {
        const scores = JSON.parse(localStorage.getItem("score"))
        console.log(scores)
        let actualPrintedScores = document.getElementById("tableBody")
        if (scores !== null) {
            for (let i = 0; i < scores.length; i++) {
                row = 
                `<tr>
                    <td>${scores[i].name}</td>
                    <td>${scores[i].score}</td>
                </tr>`
                actualPrintedScores += row
            }
        }
    }
}