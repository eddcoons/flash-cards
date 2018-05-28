import React, {Component} from 'react';
import Card from './Card';
import sampleCards from './sample-cards';
import ReviewOptions from './ReviewOptions';
import ResultsMessageGenerator from './ResultsMessageGenerator';
import CardStore from './CardStore';

let cloneDeep = require('clone-deep');

class Deck extends Component {
    state = {
        currentIndex: 0,
        correct: [],
        review: [],
        pileExhausted: false,
        sampleCardsLength: 0
    };

    cards = {};

    constructor() {
        super();
        this.cards = CardStore.allCards();
    }

    componentDidMount() {
        this.initializeCards(Object.keys(this.cards));
    }

    getInitialState() {
        return  {
            currentIndex: 0,
            correct: [],
            review: [],
            pileExhausted: false,
            sampleCardsLength: 0
        };
    }

    initializeCards(cardIds) {
        this.setState({sampleCardsLength: cardIds.length -1}, () => {
            this.getCardInfo(cardIds);
        });
    }

    getCardInfo = (cardIds) => {
        const cardId = cardIds[this.state.currentIndex];
        this.setState({ currentCard: CardStore.findByCardId(cardId)});
    };

    nextCard = () => {
        if ( this.state.sampleCardsLength === this.state.currentIndex) {
            this.state.pileExhausted = !this.state.pileExhausted;
            return;
        }
        this.setState({currentIndex: this.state.currentIndex + 1}, () => {
            this.getCardInfo(Object.keys(this.cards));
        });
    };

    addToCorrectPile = () => {
        let correct = this.state.correct.slice();
        correct.push(this.state.currentIndex);
        this.setState({correct: correct});
    };

    addToReviewPile = () => {
        let reviews = this.state.review.slice();
        reviews.push(this.state.currentCard.id);
        this.setState({review: reviews})
    };

    resetApp = () => {
        this.setState(Object.assign({}, this.getInitialState()), () => {
            this.initializeCards(CardStore.allCardIds());
        });
    };

    reviewIncorrectCards = () => {
        let reviews = this.state.review.slice();
        this.setState(Object.assign({}, this.getInitialState()), () => {
            this.initializeCards(reviews)
        });
    };

    render() {
        return (
            <div className="App">
                <Card
                    nextCard={this.nextCard}
                    key={this.state.currentIndex}
                    addToCorrectPile={this.addToCorrectPile}
                    addToReviewPile={this.addToReviewPile}
                    pileExhausted={this.state.pileExhausted}
                    currentCard={this.state.currentCard}
                />

                <div className={this.state.pileExhausted ? 'review-wrapper' : 'hidden'}>
                    <ReviewOptions
                        correct={this.state.correct}
                        review={this.state.review}
                        sampleCardsLength={this.state.sampleCardsLength}
                        resetApp={this.resetApp}
                        reviewIncorrectCards={this.reviewIncorrectCards}
                    />
                </div>

            </div>
        );
    }
}

export default Deck;
