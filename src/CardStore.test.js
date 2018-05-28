import React from 'react';
import CardStore from './CardStore';
import cards from './sample-cards';

it('gets all cards', () => {
    let allCards = CardStore.allCards();

    expect(allCards.length).toBe(cards.length);
});

it('gets all card ids', () => {
    let allCardIds = CardStore.allCardIds();
    let sampleCardIds = Object.keys(cards);

    expect(JSON.stringify(allCardIds)).toEqual(JSON.stringify(sampleCardIds));
});

it('finds card by id', () => {
    let cardId = CardStore.findByCardId('card1');
    let sampleCardId = cards.card1;

    expect(JSON.stringify(cardId)).toEqual(JSON.stringify(sampleCardId));
});
