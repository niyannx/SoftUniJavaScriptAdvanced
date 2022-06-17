function printDeckOfCards(face, suit) {
    // define valid inputs
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    // if input is valid
    if (!suit in suits) {
        throw new Error('Invalid suit: ' + suit);
    }

    if (!faces.includes(face)) {
        throw new Error('Invalid face: ' + face);
    }

    // main
    const result = {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    };

    return result;
}

// tests
console.log(printDeckOfCards('A', 'S').toString());
console.log(printDeckOfCards('10', 'H').toString());
console.log(printDeckOfCards('1', 'C').toString());
