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
					<div onClick={this.markCorrect} className={'results-button hvr-sweep-to-top'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className={'result-icon'} fill={'#C9FFD8'}><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
						<span>Right!</span>
					</div>
					<div onClick={this.markIncorrect} className={'results-button hvr-sweep-to-top'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className={'result-icon'} fill={'#FF9FA4'}><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
						<span>Wrong!</span>
					</div>
				</div>
			)
		}
}

export default Results;
