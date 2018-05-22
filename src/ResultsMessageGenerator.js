
class ResultsMessageGenerator {
    correct = 0;
    sampleCardLength = 0;

    getMessage = (correct, sampleCardsLength) => {
        this.correct = correct;
        this.sampleCardLength = sampleCardsLength;
       let percentage = (this.correct / this.sampleCardLength) * 100;
        if(percentage >= 50) {
            return `Congrats!! You got ${percentage}% correct.`;
        }
        else {
            return `You only got ${percentage}% correct. Try again.`;
        }
    }
}

export default ResultsMessageGenerator;
