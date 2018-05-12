import React from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';
import Results from './Results';
import sampleCards from './sample-cards'

class Card extends React.Component {
	state = {
		showFront: true,
        currentIndex: 1,
		currentCard: {},
		newCard: false
	};

	componentDidMount() {
		this.getCardInfo(this.state.currentIndex);
	}

    componentWillReceiveProps(nextProps) {
    	this.setState({showFront: true});
        this.getCardInfo(nextProps.currentIndex);
    }

    getCardInfo = (currentIndex) => {
        const cardInfo = sampleCards['card' + currentIndex];
        this.setState({ currentCard: cardInfo});
    };

  	flipCard = () => {
    	this.setState({
     		showFront: !this.state.showFront
	   	})
	  };

	render() {
		return(
		<div>
			 <CardFront
		       	flipCard={this.flipCard} 
		        showFront={this.state.showFront}
                newCard={this.state.newCard}
		        image={this.state.currentCard.image}
		      />
		      <CardBack  
		        // flipCard={this.flipCard}
		        showFront={this.state.showFront}
		        newCard={this.state.newCard}
		        title={this.state.currentCard.title}
		        artist={this.state.currentCard.artist}
		        medium={this.state.currentCard.medium}
		        year={this.state.currentCard.year}
		      />
		      <Results 
		        showFront={this.state.showFront}
		        nextCard={this.props.nextCard}
		      />
	      </div>
		)
	}
}

export default Card;
