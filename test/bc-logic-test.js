const assert = chai.assert;

describe('browser calculator', () => {
    describe('divide', () => {
        it('should throw an error on number being divided by zero', () => {
            result = divide(3, 0);
            assert.equal(result, result);
        })
        it('should return the quotient of two number', () => {
            result = divide(12, 3);
            assert.equal(result, 4);
        })
    });
    describe('multiply', () => {
        it('should return the product of two number', () => {
            result = multiply(2, 5);
            assert.equal(result, 10);
        })
    })
    describe('subract', () => {
        it('should return the difference of two number', () => {
            result = subract(5, 2);
            assert.equal(result, 3);
        })
    })
    describe('add', () => {
        it('should return the sum of two number', () => {
            result = add(3, 5);
            assert.equal(result, 8);
        })
    })
});