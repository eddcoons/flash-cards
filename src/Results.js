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
				<div className={this.props.showFront ? 'results-hidden' : 'results-wrapper'}>
					<div onClick={this.markCorrect} className={'results-button'}>Right!</div>
					<div onClick={this.markIncorrect} className={'results-button'}>Wrong!</div>
				</div>
			)
		}
}

export default Results;
