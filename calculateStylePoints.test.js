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

        it('Case 5: should return style points', () => {
            const actual = calculateStylePoints ([18, 20, 0, 20, 'a']); 
    
            const expected = false;  
            
    
            assert.equal(actual, expected);
        });

        it('Case 6: should return style points', () => {
            const actual = calculateStylePoints ([18, 20, 0, 20, 22]); 
    
            const expected = false;  
            
    
            assert.equal(actual, expected);
        });

        it('Case 7: should return style points', () => {
            const actual = calculateStylePoints ([18, 20, 0, 20, null]); 
    
            const expected = false;  
            
    
            assert.equal(actual, expected);
        });

        it('Case 8: should return style points', () => {
            const actual = calculateStylePoints ([18, 20, 0, 20]); 
    
            const expected = false;  
                
            assert.equal(actual, expected);
        });

        it('Case 9: should return style points', () => {
            const actual = calculateStylePoints ([18, 20, 0, 20, ' ']); 
    
            const expected = false;  
                
            assert.equal(actual, expected);
        });

        it('Case 10: should return style points', () => {
            const actual = calculateStylePoints ([18, 20, 0, 20, undefined]); 
    
            const expected = false;  
                
            assert.equal(actual, expected);
        });

        
    });
 });

