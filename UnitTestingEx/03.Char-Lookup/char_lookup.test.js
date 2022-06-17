const { expect } = require('chai');
const { lookupChar } = require('./char_lookup');

describe('Char Lookup Checker', () => {
    it('should return undefined if arguments are of incorrect type', () => {
        // both arguments are invalid
        expect(lookupChar(004, 'this is not valid')).to.equal(undefined);
        
        // second argument is not integer
        expect(lookupChar('this is valid', 0.4)).to.equal(undefined);
        expect(lookupChar('this is valid', 'this is not valid')).to.equal(undefined);

        // first argument is not string
        expect(lookupChar(34, 1)).to.equal(undefined);
    });

    it('should return "incorrect index" message if the index is out of bounds', () => {
        expect(lookupChar('this is valid', 123)).to.equal('Incorrect index');
        expect(lookupChar('this is valid', -44)).to.equal('Incorrect index');
    });

    // happy path
    it('should return the char at given index when arguments are valid', () => {
        expect(lookupChar('hello', 2)).to.equal('l');
        expect(lookupChar('test 2', 4)).to.equal(' ');
    });
});