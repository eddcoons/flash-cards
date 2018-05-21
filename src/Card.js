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
		<div
			className={`
			main-content
			${this.props.pileExhausted ? 'wrapper-hidden' : ''}
			`}
		>
			<div className={`card-wrapper
			${this.state.showFront ? '' : 'card-flip'}
			`} onClick={this.flipCard}>
                <div

                    className={`
						front
						card
						${this.state.showFront ? '' : 'hidden'}
					`} >
                    <div className={'card-heading'}><span className={'heading-text'}>{this.props.currentCard.id}</span></div>
                    <img src={this.props.currentCard.image} alt={"front of flash card"}/>
                </div>
                <div
                    // onClick={this.flipCard}
                    className={`
							back
							card
							${this.state.showFront ? 'hidden' : ''}
						`}>
					<div className={'back-info'}>
                        <h2 className={'main-answer'}>{this.props.currentCard.title}</h2>
                        <h3 className={'secondary-answer'}>{this.props.currentCard.artist}</h3>
                        <h4 className={'extra-info'}>{this.props.currentCard.medium}</h4>
                        <h4 className={'extra-info'}>{this.props.currentCard.year}</h4>
					</div>


                    <Results
                        showFront={this.state.showFront}
                        nextCard={this.props.nextCard}
                        addToCorrectPile={this.props.addToCorrectPile}
                        addToReviewPile={this.props.addToReviewPile}
                    />
                </div>
			</div>




	      </div>
		)
	}
}

export default Card;
