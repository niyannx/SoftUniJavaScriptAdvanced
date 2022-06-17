const { expect } = require('chai');
const { rgbToHexColor } = require('./06_rgb_to_hex');

describe('RGB to HEX Color Checker', () => {
    it('converts from rgb to hex with valid arguments', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        expect(rgbToHexColor(127, 127, 127)).to.equal('#7F7F7F');
    });

    it('should return undefined if rgb values are larger than required', () => {
        expect(rgbToHexColor(256, 255, 255)).to.equal(undefined);
        expect(rgbToHexColor(255, 256, 255)).to.equal(undefined);
        expect(rgbToHexColor(255, 255, 256)).to.equal(undefined);
    });

    it('should return undefined if rgb values are smaller than requred', () => {
        expect(rgbToHexColor(-1, 255, 255)).to.equal(undefined);
        expect(rgbToHexColor(255, -1, 255)).to.equal(undefined);
        expect(rgbToHexColor(255, 255, -1)).to.equal(undefined);
    });

    it('should return undefined if the input arguments are zero', () => {
        expect(rgbToHexColor()).to.equal(undefined);
    });
});