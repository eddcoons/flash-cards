
class ResultsMessageGenerator {

    getMessage = (correct, sampleCardsLength) => {
       let percentage = (correct / sampleCardsLength) * 100;
        if(percentage >= 50) {
            return `Congrats!! You got ${percentage}% correct.`;
        }
        else {
            return `You only got ${percentage}% correct. Try again.`;
        }
    }
}

export default ResultsMessageGenerator;
