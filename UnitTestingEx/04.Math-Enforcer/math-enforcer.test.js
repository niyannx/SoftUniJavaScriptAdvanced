const { expect } = require('chai');
const { mathEnforcer } = require('./math-enforcer');

describe('Math enforcer Checker', () => {
    describe('addFive Method', () => {
        it ('should return undefined if input is not of type number', () => {
            expect(mathEnforcer.addFive('invalid')).to.equal(undefined);
            expect(mathEnforcer.addFive([1])).to.equal(undefined);
        });

        it ('should add five to the given number', () => {
            // positive numbers
            expect(mathEnforcer.addFive(50)).to.equal(55);
            // not whole numbers
            expect(mathEnforcer.addFive(103.2)).to.equal(108.2);
            // negative numbers
            expect(mathEnforcer.addFive(-50)).to.equal(-45);
        });
    });

    describe('subtractTen Method', () => {
        it ('should return undefined if input is not of type number', () => {
            expect(mathEnforcer.subtractTen('invalid')).to.equal(undefined);
            expect(mathEnforcer.subtractTen([1])).to.equal(undefined);
        });

        it ('should subtract five from the given number', () => {
            // positive numbers
            expect(mathEnforcer.subtractTen(50)).to.equal(40);
            // not whole numbers
            expect(mathEnforcer.subtractTen(103.2)).to.equal(93.2);
            // negative numbers
            expect(mathEnforcer.subtractTen(-50)).to.equal(-60);
        });
    });

    describe('sum Method', () => {
        it ('should return undefined if any of the arguments are not of type number', () => {
            expect(mathEnforcer.sum('this is invalid', 0)).to.equal(undefined);
            expect(mathEnforcer.sum(0, 'this is invalid')).to.equal(undefined);
            expect(mathEnforcer.sum('this is invalid', 'this is also invalid')).to.equal(undefined);
            
        });

        it ('should return the sum of the given numbers', () => {
            expect(mathEnforcer.sum(100, 120)).to.equal(220);
            expect(mathEnforcer.sum(100.3, 120.2)).to.equal(220.5);
        });
    });
});