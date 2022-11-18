function swap(val1, val2, array) {
    let temp = array[val1];
    array[val1] = array[val2];
    array[val2] = temp;
};
    
export default function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        swap(i, j, cards);
    }
};