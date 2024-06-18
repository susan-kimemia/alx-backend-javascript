// Combining descriptions

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('#calculateNumber()', () => {
  describe('when type is SUM', () => {
    it('should return the sum of a and b', () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('should return the sum of a and b', () => {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it('should return the sum of a and b', () => {
      assert.equal(calculateNumber('SUM', 5.6, 1), 7);
    });
    it('should return the sum of a and b', () => {
      assert.equal(calculateNumber('SUM', 1, 6.6), 8);
    });
  });

  describe('#calwhen type is SUBTRACT', () => {
    it('should return a minus b', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('should return a minus b', () => {
      assert.equal(calculateNumber('SUBTRACT', 4, 2), 2);
    });
    it('should return a minus b', () => {
      assert.equal(calculateNumber('SUBTRACT', 10, 2), 8);
    });
    it('should return a minus b', () => {
      assert.equal(calculateNumber('SUBTRACT', 2, 10), -8);
    });
    it('should return a minus b', () => {
      assert.equal(calculateNumber('SUBTRACT', -4, -4), 0);
    });
  });

  describe('when type is DIVIDE', () => {
    it('should return a divided by b', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should return a divided by b', () => {
      assert.equal(calculateNumber('DIVIDE', 10, 2), 5);
    });
    it('should return a divided by b', () => {
      assert.equal(calculateNumber('DIVIDE', 2, 2), 1);
    });
    it('should return Error when b is 0', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('should return Error when b is 0', () => {
      assert.equal(calculateNumber('DIVIDE', 5, 0), 'Error');
    });
  });
});
