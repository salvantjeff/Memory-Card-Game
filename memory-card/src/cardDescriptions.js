class CardDescriptions {
    
    constructor(totalCards) {
        this.list = new Array(totalCards).fill(null);
    }

    addDescription(description, idx) {
        this.list[idx] = description;
    }
}

const cardDescriptions = new CardDescriptions(10);
cardDescriptions.addDescription('Trailblazer', 0);
cardDescriptions.addDescription('Rush', 1);
cardDescriptions.addDescription('Stylebender', 2);
cardDescriptions.addDescription('Nigerian Nightmare', 3);
cardDescriptions.addDescription('Eagle', 4);
cardDescriptions.addDescription('Mighty Mouse', 5);
cardDescriptions.addDescription('Predator', 6);
cardDescriptions.addDescription('Do Bronx', 7);
cardDescriptions.addDescription('Notorious', 8);
cardDescriptions.addDescription('Bones', 9);

export default cardDescriptions;