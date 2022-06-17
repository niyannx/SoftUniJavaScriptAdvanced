const { expect } = require('chai');
const { isSymmetric } = require('./05_check_for_symmetry');

describe('Symmetry Checker', () => {
    it('works with symmetric numeric array with even length', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('works with symmetric numeric array with odd length', () => {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    });

    it('returns false for non-symmetric numeric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('returns false for non-array', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it('returns false with symmetric non-numeric array', () => {
        expect(isSymmetric([1, 2, 2, '1'])).to.be.false;
    });

    it('returns false with symmetric string', () => {
        expect(isSymmetric('lool')).to.be.false;
    });
});