import React from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';
import Results from './Results';
import sampleCards from './sample-cards'

class Card extends React.Component {
	state = {
		showFront: true,
		currentCard: {},
		newCard: false
	};

	componentDidMount() {
		this.getCardInfo(this.props.currentIndex);
	}

    componentWillReceiveProps(nextProps) {
    	this.setState({showFront: true});
        this.getCardInfo(nextProps.currentIndex);
    }

    getCardInfo = (currentIndex) => {
    	console.log(this.props.cardIds);
        const cardInfo = this.props.sampleCards[this.props.cardIds[currentIndex]];
        this.setState({ currentCard: cardInfo});
        console.log(cardInfo);
    };

  	flipCard = () => {
    	this.setState({
     		showFront: !this.state.showFront
	   	})
	  };

	render() {
        // const { title, artist, medium, year } = this.sampleCards;
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
                    <img src={this.state.currentCard.image} />
                </div>
                <div
                    // onClick={this.flipCard}
                    className={`
							back
							card
							${this.state.showFront ? 'hidden' : ''}
						`}>
                    <h2>{this.state.currentCard.title}</h2>
                    <h3>{this.state.currentCard.artist}</h3>
                    <h4>{this.state.currentCard.medium}</h4>
                    <h4>{this.state.currentCard.year}</h4>
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
