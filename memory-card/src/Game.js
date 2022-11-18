export default class Game {
    cards;
    currentScore;
    highestScore;
    newCards;
    constructor(currentScore, highestScore) {
        this.cards = [];
        this.newCards = {};
        this.currentScore = currentScore;
        this.highestScore = highestScore;
    }
}