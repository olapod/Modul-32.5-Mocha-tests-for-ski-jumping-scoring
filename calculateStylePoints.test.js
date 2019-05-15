const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {

    describe('calculating style points', () => {
        it('Case 1: should return style points', () => {
            const actual = calculateStylePoints ([19, 20, 19.5, 19, 18.5]);
    
            const expected = 57.5;
    
            assert.equal(actual, expected);
        });

        it('Case 2: should return style points', () => {
            const actual = calculateStylePoints ([20, 20, 20, 20, 20]);
    
            const expected = 60;
    
            assert.equal(actual, expected);
        });

        it('Case 3: should return style points', () => {
            const actual = calculateStylePoints ([0, 0, 0, 0, 0]);
    
            const expected = 0;
    
            assert.equal(actual, expected);
        });

        it('Case 4: should return style points', () => {
            const actual = calculateStylePoints ([18.5, 18.5, 19, 19, 20]);
    
            const expected = 56.5;
    
            assert.equal(actual, expected);
        });
    });
 });

