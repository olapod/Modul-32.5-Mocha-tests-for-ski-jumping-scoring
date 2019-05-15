const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {

    describe('calculating total points', () => {
        it('Test 1: should return total points for large hill', () => {
            const actual = calculateTotalPoints (134, 'large', 120, [19, 20, 19.5, 19, 18.5], -5.4, 0);
    
            const expected = 137.3;
    
            assert.equal(actual, expected);
        });

        it('Test 2: should return total points for flying hill', () => {
            const actual = calculateTotalPoints (227.5, 'flying', 200, [18, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7);
    
            const expected = 208.3;
    
            assert.equal(actual, expected);
        });

        it('Test 3: should return total points for normal hill', () => {
            const actual = calculateTotalPoints (80, 'normal', 98, [15, 15.5, 16, 15.5, 16], -10.2, 0);
    
            const expected = 60.8;
    
            assert.equal(actual, expected);
        });        
    });
 });
 