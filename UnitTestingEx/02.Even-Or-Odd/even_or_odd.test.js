const { expect } = require('chai');
const { isOddOrEven } = require('./even_or_odd');

describe('Even Or Odd String Length Checker', () => {
    it ('should return undefined if the argument is not a string', () => {
        expect(isOddOrEven([1, 2, 3, 4])).to.equal(undefined);
        expect(isOddOrEven(1234)).to.equal(undefined);
        expect(isOddOrEven()).to.equal(undefined);
    });

    it ('should return "even" if the arguments length is an even number', () => {
        expect(isOddOrEven('hoho')).to.equal('even');
        expect(isOddOrEven('nia nikolova')).to.equal('even');
    });

    it ('should return "odd" if the arguments length is an odd number', () => {
        expect(isOddOrEven('gimme')).to.equal('odd');
        expect(isOddOrEven('another example')).to.equal('odd');
    });
});