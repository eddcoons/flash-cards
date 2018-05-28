import cardData from '../__fixtures__/testCardData';

class FakeCardStore {
    static allCards() {
        return cardData;
    }

    static allCardIds() {
        return Object.keys(this.allCards());
    }

    static findByCardId(id) {
        return FakeCardStore.allCards()[id];
    }
}

export default FakeCardStore;
