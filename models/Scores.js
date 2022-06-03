export class Scores{
    constructor(scores){
        this.scores = scores
    }

    addTableScore(){
        const scores = JSON.parse(localStorage.getItem("score"))
        console.log(scores)
    }
}