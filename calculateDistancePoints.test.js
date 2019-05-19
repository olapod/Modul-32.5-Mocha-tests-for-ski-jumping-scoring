const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {

    describe('flying hill', () => {
        it('case:1 should return distance points for flying hill', () => {
            const actual = calculateDistancePoints (227.5, 'flying', 200);
    
            const expected = 153;
    
            assert.equal(actual, expected);
        });

        it('case:2 should return distance points for flying hill', () => {
            const actual = calculateDistancePoints (null, 'flying', 200);
    
            const expected = false;
    
            assert.equal(actual, expected);
        });
    });

    describe('normal hill', () => {
        it('case 1: should return distance points for normal hill', () => {
            const actual = calculateDistancePoints (111, 'normal', 98);
    
            const expected = 86;
    
            assert.equal(actual, expected);
        });

        it('case 2: should return distance points for normal hill', () => {
            const actual = calculateDistancePoints (111, 'dupa', 98);
    
            const expected = false;
    
            assert.equal(actual, expected);
        });
    });
    
    describe('large hill', () => {
         it('case 1: should return distance points for large hill', () => {
            const actual = calculateDistancePoints (107.5, 'large', 120);
    
            const expected = 37.5;
    
            assert.equal(actual, expected);
        });

        it('Case2: should return distance points for large hill', () => {
            const actual = calculateDistancePoints ('a', 'large', 120);
    
            const expected = false;
    
            assert.equal(actual, expected);
        });

        it('Case3: should return distance points for large hill', () => {
            const actual = calculateDistancePoints (130, 'large', undefined);
    
            const expected = false;
    
            assert.equal(actual, expected);
        });

        it('Case4: should return distance points for large hill', () => {
            const actual = calculateDistancePoints (' ', 'large', 140);
    
            const expected = false;
    
            assert.equal(actual, expected);
        });
    });
});

