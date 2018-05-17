import React from 'react';
import Results from './Results';

class Card extends React.Component {
	state = {
		showFront: true,
		currentCard: {},
		newCard: false
	};


  	flipCard = () => {
    	this.setState({
     		showFront: !this.state.showFront
	   	})
	  };

    static defaultProps = {
        currentCard: {
        	image: '',
        	title: '',
        	artist: '',
        	medium: '',
        	year: ''
        }
    };

	render() {
		return(
		<div className={`main-content
			${this.props.pileExhausted ? 'hidden' : ''}
		`}>
			<div className={`card-wrapper
			${this.state.showFront ? '' : 'card-flip'}
			`} onClick={this.flipCard}>

                <div

                    className={`
						front
						card
						${this.state.showFront ? '' : 'hidden'}
					`} >
                    <img src={this.props.currentCard.image} />
                </div>
                <div
                    // onClick={this.flipCard}
                    className={`
							back
							card
							${this.state.showFront ? 'hidden' : ''}
						`}>
                    <h2>{this.props.currentCard.title}</h2>
                    <h3>{this.props.currentCard.artist}</h3>
                    <h4>{this.props.currentCard.medium}</h4>
                    <h4>{this.props.currentCard.year}</h4>
                </div>
			</div>



		      <Results 
		        showFront={this.state.showFront}
		        nextCard={this.props.nextCard}
		        addToCorrectPile={this.props.addToCorrectPile}
                addToReviewPile={this.props.addToReviewPile}
		      />
	      </div>
		)
	}
}

export default Card;
