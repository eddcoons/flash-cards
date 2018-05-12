import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import CardFront from './CardFront';

it('flips the card', () => {
    const div = document.createElement('div');
    let card = ReactDOM.render(<Card />, div);
    card.flipCard();

    card.contains('This is the front of the card')
});
