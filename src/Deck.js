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
        pileExhausted: false,
        sampleCardsLength: 0
    };

    initialState = {};

    cards = {};

    constructor() {
        super();
        this.cards = this.allCards();
    }

    componentDidMount() {
        this.initialState = cloneDeep(this.state);
        this.cards = this.allCards();
        this.initializeCards(this.allCardIds());
    }

    initializeCards(cardIds) {
        this.setState({sampleCardsLength: cardIds.length -1});
        this.getCardInfo(cardIds);
    }

    getCardInfo = (cardIds) => {
        const cardId = cardIds[this.state.currentIndex];
        this.setState({ currentCard: this.findByCardId(cardId)});
    };

    allCards() {
        return sampleCards
    };

    allCardIds() {
        return Object.keys(this.cards);
    }

    findByCardId(id) {
        return this.cards[id];
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
        this.state.correct.push(this.state.currentIndex);
        this.setState({correct: this.state.correct})
    };

    addToReviewPile = () => {
        let reviews = this.state.review.slice();
        reviews.push(this.state.currentCard.id);
        this.setState({review: reviews})
    };

    resetApp = () => {
        this.setState(Object.assign({}, this.initialState), () => {
            this.initializeCards(this.allCardIds());
        });
    };

    reviewIncorrectCards = () => {
        let reviews = this.state.review.slice();
        this.setState(Object.assign({}, this.initialState), () => {
            this.initializeCards(reviews)
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
                    currentCard={this.state.currentCard}
                />

                <div className={this.state.pileExhausted ? 'review-wrapper' : 'hidden'}>
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
