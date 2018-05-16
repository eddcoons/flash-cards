import React, {Component} from 'react';
import Card from './Card';
import sampleCards from './sample-cards';
import ReviewOptions from './ReviewOptions';

let cloneDeep = require('clone-deep');

class Deck extends Component {
    state = {
        currentIndex: 0,
        correct: [],
        review: [],
        sampleCards: [],
        pileExhausted: false,
        sampleCardsLength: 0
    };

    initialState = {};

    cards = [];

    componentDidMount() {
        this.initialState = cloneDeep(this.state);
        this.setState({sampleCards: this.allCards() }, () => {
            this.initializeCards(this.allCards());
        });
    }

    initializeCards(cards) {
        let cardIds = Object.keys(cards);
        this.setState({sampleCardsLength: cardIds.length -1});
        this.getCardInfo(cardIds);
    }

    allCards() {
        return sampleCards
    };

    getCardInfo = (cardIds) => {
        const cardId = cardIds[this.state.currentIndex];
        const cardInfo = this.state.sampleCards[cardId];
        this.setState({ currentCard: cardInfo});
    };

    nextCard = () => {
        if ( this.state.sampleCardsLength === this.state.currentIndex) {
            this.state.pileExhausted = !this.state.pileExhausted;
            return;
        }
        this.setState({currentIndex: this.state.currentIndex + 1}, () => {
            this.getCardInfo(Object.keys(this.state.sampleCards));
        });

    };

    addToCorrectPile = () => {
        this.state.correct.push(this.state.currentIndex);
        this.setState({correct: this.state.correct})
    };

    addToReviewPile = () => {
        this.state.review.push(this.state.currentIndex);
        this.setState({review: this.state.review})
    };

    resetApp = () => {
        this.setState(Object.assign({}, this.initialState), () => {
            this.initializeCards(this.allCards());
        });
    };

    render() {
        return (
            <div className="App">
                <Card
                    currentIndex={this.state.currentIndex}
                    nextCard={this.nextCard}
                    key={this.state.currentIndex}
                    addToCorrectPile={this.addToCorrectPile}
                    addToReviewPile={this.addToReviewPile}
                    pileExhausted={this.state.pileExhausted}
                    sampleCards={this.state.sampleCards}
                    currentCard={this.state.currentCard}
                />
                <div className={this.state.pileExhausted ? '' : 'hidden'}>
                    <ReviewOptions
                        correct={this.state.correct}
                        review={this.state.review}
                        resetApp={this.resetApp}
                        reviewIncorrectCards={this.reviewIncorrectCards}
                    />
                </div>

            </div>
        );
    }
}

export default Deck;
