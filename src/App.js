import React, { Component } from 'react';
import Card from './Card';
import './App.css';
import sampleCards from './sample-cards';
import ReviewOptions from './ReviewOptions'

let cloneDeep = require('clone-deep');

class App extends Component {
 state = {
  currentIndex: 0,
  correct: [],
  review: [],
  sampleCards: sampleCards,
  sampleCardsLeft: 5,
  pileExhausted: false,
  cardIds: []
 };

 initialState = {};

 constructor() {
    super();
     this.state.cardIds = Object.keys(sampleCards);
 }

componentDidMount() {
    this.initializeCards(sampleCards);
    this.initialState = cloneDeep(this.state);
}

initializeCards(cardData) {

    this.setState({ sampleCardsLeft: Object.keys(cardData).length - 1});
}

nextCard = () => {
    if(this.state.sampleCardsLeft === 0) {
        this.state.pileExhausted = !this.state.pileExhausted;
        return;
    }
    this.setState({ sampleCardsLeft: this.state.sampleCardsLeft - 1});
    this.setState({ currentIndex: this.state.currentIndex + 1});

};

addToCorrectPile = () => {
    this.state.correct.push(this.state.currentIndex);
    this.setState({ correct: this.state.correct })
};

addToReviewPile = () => {
    this.state.review.push(this.state.currentIndex);
    this.setState({ review: this.state.review })
};

reviewIncorrectCards = () => {

};

resetApp = () => {
   this.setState( Object.assign({}, this.initialState));
    this.state.cardIds = Object.keys(sampleCards);
    this.setState( {sampleCards: sampleCards });
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
            cardIds={this.state.cardIds}
            sampleCards={this.state.sampleCards}
        />
          <div className={this.state.pileExhausted ? '' : 'hidden'}>
              <ReviewOptions
                correct={this.state.correct}
                review={this.state.review}
                resetApp={this.resetApp}
              />
          </div>

      </div>
    );
  }
}

export default App;
