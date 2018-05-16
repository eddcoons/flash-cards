import React from 'react';

class Results extends React.Component {
    markCorrect = () => {
        this.props.nextCard();
        this.props.addToCorrectPile();
    };
    markIncorrect = () => {
        this.props.nextCard();
        this.props.addToReviewPile();
    };
		render() {
			return(
				<div className={this.props.showFront ? 'results-hidden' : ''}>
					<div onClick={this.markCorrect}>Right!</div>
					<div onClick={this.markIncorrect}>Wrong!</div>
				</div>
			)
		}
}

export default Results;
