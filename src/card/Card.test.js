import React from 'react';
import Card from './Card';
import { mount } from 'enzyme';

it('flips the card', () => {
    let card = mount(<Card />);

    expect(card.state().showFront).toBe(true);
    expect(card.find('.front').hasClass('hidden')).toBe(false);
    expect(card.find('.back').hasClass('hidden')).toBe(true);

    card.instance().flipCard();
    card.update();

    expect(card.state().showFront).toBe(false);
    expect(card.find('.front').hasClass('hidden')).toBe(true);
    expect(card.find('.back').hasClass('hidden')).toBe(false);
});
