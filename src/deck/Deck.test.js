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
    deckInstance.nextCard();
    deckInstance.nextCard();
    expect(deck.state().pileExhausted).toBe(true);
});

it('can review incorrect cards', () => {
    let deck = mount(<Deck />);
    let deckInstance = deck.instance();

    deckInstance.addToCorrectPile();

    deckInstance.nextCard();
    deckInstance.addToReviewPile();

    deckInstance.nextCard();
    deckInstance.addToReviewPile();

    deckInstance.nextCard();
    deckInstance.addToReviewPile();

    expect(deck.state().correct.length).toBe(1);
    expect(deck.state().review.length).toBe(3);

    deckInstance.reviewIncorrectCards();

    expect(deck.state().currentCard.id).toBe('card2');

    deckInstance.nextCard();

    expect(deck.state().currentCard.id).toBe('card3');
});

it('cant add same index to correct pile twice', () => {
    let deck = mount(<Deck />);
    let deckInstance = deck.instance();

    deckInstance.addToCorrectPile();
    deckInstance.nextCard();
    deckInstance.addToCorrectPile();
    deckInstance.nextCard();
    deckInstance.addToCorrectPile();
    deckInstance.nextCard();
    deckInstance.addToCorrectPile();

    //next card even though deck has no more cards
    deckInstance.nextCard();
    deckInstance.addToCorrectPile();

    expect(deck.state().correct.length).toBe(4);
    expect(deck.state().review.length).toBe(0);
});

it('cant add same index to review pile twice', () => {
    let deck = mount(<Deck />);
    let deckInstance = deck.instance();

    deckInstance.addToReviewPile();
    deckInstance.nextCard();
    deckInstance.addToReviewPile();
    deckInstance.nextCard();
    deckInstance.addToReviewPile();
    deckInstance.nextCard();
    deckInstance.addToReviewPile();

    //next card even though deck has no more cards
    deckInstance.nextCard();
    deckInstance.addToReviewPile();

    expect(deck.state().correct.length).toBe(0);
    expect(deck.state().review.length).toBe(4);
});

it('resets app', () => {
    let deck = mount(<Deck />);
    let deckInstance = deck.instance();

    deckInstance.addToReviewPile();
    deckInstance.nextCard();
    deckInstance.addToReviewPile();
    deckInstance.nextCard();
    deckInstance.addToReviewPile();
    deckInstance.nextCard();
    deckInstance.addToReviewPile();

    deckInstance.resetApp();

   expect(deck.state().currentIndex).toBe(0);
   expect(deck.state().correct.length).toBe(0);
   expect(deck.state().review.length).toBe(0);
   expect(deck.state().pileExhausted).toBe(false);
   expect(deck.state().sampleCardsLength).toBe(3);
});
