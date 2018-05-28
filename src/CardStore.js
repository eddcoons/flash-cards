import sampleCards from "./sample-cards";


class CardStore {
    static allCards() {
        return sampleCards
    };

   static allCardIds() {
        return Object.keys(this.allCards());
    }

    static findByCardId(id) {
        return this.allCards()[id];
    };
}

export default CardStore;
