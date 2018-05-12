import React, { Component } from 'react';
import Card from './Card';
import CardFront from './CardFront';
import CardBack from './CardBack';
import Results from './Results';
import './App.css';

class App extends Component {
 state = {
  currentIndex: 1
 };

nextCard = () => {
    this.setState({ currentIndex: this.state.currentIndex + 1})
};

  render() {
    return (
      <div className="App">
        <Card
            currentIndex={this.state.currentIndex}
            nextCard={this.nextCard}
        />
      </div>
    );
  }
}

export default App;
