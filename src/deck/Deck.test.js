import React from 'react';
import Deck from './Deck';
import { mount } from 'enzyme';

jest.mock('../card/CardStore');

it('goes to the next card in the deck', () => {
    let deck = mount(<Deck />);
    let deckInstance = deck.instance();

    expect(deck.state().currentIndex).toBe(0);
    expect(deck.state().pileExhausted).toBe(false);
    expect(deck.state().currentCard.id).toBe('card1');

    deckInstance.nextCard();
    expect(deck.state().currentIndex).toBe(1);
    expect(deck.state().currentCard.id).toBe('card2');

    // try and go to next card that doesn't exist
    deckInstance.nextCard();
    expect(deck.state().pileExhausted).toBe(true);
});
