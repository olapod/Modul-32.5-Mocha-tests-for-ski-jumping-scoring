const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {

    describe('flying hill', () => {
        it('should return distance points for flying hill', () => {
            const actual = calculateDistancePoints (227.5, 'flying', 200);
    
            const expected = 153;
    
            assert.equal(actual, expected);
        });
    });

    describe('normal hill', () => {
        it('should return distance points for normal hill', () => {
            const actual = calculateDistancePoints (111, 'normal', 98);
    
            const expected = 86;
    
            assert.equal(actual, expected);
        });
    });
    
    describe('large hill', () => {
         it('should return distance points for large hill', () => {
            const actual = calculateDistancePoints (107.5, 'large', 120);
    
            const expected = 37.5;
    
            assert.equal(actual, expected);
        });
    });
});

