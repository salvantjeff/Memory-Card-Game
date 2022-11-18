export default class Card {
    id;
    description;
    totalClicks;
    constructor(id, description) {
        this.id = id;
        this.description = description;
        this.totalClicks = 2;
    }
};