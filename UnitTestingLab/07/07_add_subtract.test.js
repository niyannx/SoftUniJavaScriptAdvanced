const { expect } = require('chai');
const { createCalculator } = require('./07_add_subtract');

describe('Calculator Checker', () => {
    it ('returns an object', () => {
        expect(createCalculator()).to.be.an('object');
    });

    it ('has the correct properties', () => {
        expect(createCalculator()).to.have.property('add');
        expect(createCalculator()).to.have.property('subtract');
        expect(createCalculator()).to.have.property('get');
    });

    it ('s property get() returns the value of internal sum', () => {
        expect(createCalculator().get()).to.equal(0);
    });

    it ('s property add() adds to internal sum', () => {
        let calculator = createCalculator();

        calculator.add(10);
        expect(calculator.get()).to.equal(10);
    });

    it('s property subtract() subtracts from internal sum', () => {
        let calculator = createCalculator();

        calculator.subtract(10);
        expect(calculator.get()).to.equal(-10);
    });

    it ('should return NaN if a string is added', () => {
        let calculator = createCalculator();

        calculator.add('test');

        expect(calculator.get()).to.be.NaN;
    });

    it ('should return NaN if a string is subtracted', () => {
        let calculator = createCalculator();

        calculator.subtract('test');
        expect(calculator.get()).to.be.NaN;
    });
});