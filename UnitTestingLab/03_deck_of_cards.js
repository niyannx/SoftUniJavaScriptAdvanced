function printDeckOfCards(arr) {
    let valid = true;
    let deck = [];

    for (let cardInfo of arr) {
        let face = cardInfo.slice(0, -1);
        let suit = cardInfo.slice(-1);
        
        try {
            const card = createCard(face, suit);
            deck.push(card);
        } catch (e) {
            valid = false;
            console.log('Invalid card: ' + cardInfo);
        }
    }

    function createCard(face, suit) {
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

    if (valid) {
        console.log(deck.join(' '));
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);