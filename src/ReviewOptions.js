import React from 'react';
import ResultsMessageGenerator from "./ResultsMessageGenerator";

class ReviewOptions extends React.Component {
    resultsMessage;
    constructor(props) {
        super(props);
        this.resultsMessage = new ResultsMessageGenerator();
    }

    render() {
        return(
            <div className={'review-section'}>
                <div className={'review-heading'}>{this.resultsMessage.getMessage(this.props.correct.length, this.props.sampleCardsLength + 1)}</div>
                <div className={'review-results'}>
                    <div className={'review-results-info'}>You got {this.props.correct.length} right and {this.props.review.length} wrong.</div>
                    <div onClick={this.props.reviewIncorrectCards} className={this.props.review.length === 0 ? 'hidden' : 'review-button review-sweep-to-top'}>Review Missed Cards</div>
                    <div onClick={this.props.resetApp} className={'review-redo'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={'#E4F2F2'} className={'result-icon'}><path d="M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z"/></svg>
                        Start Over
                    </div>

                </div>

            </div>
        )
    }
}

export default ReviewOptions;
