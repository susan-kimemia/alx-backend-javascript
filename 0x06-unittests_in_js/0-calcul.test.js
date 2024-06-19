// a file that contains test cases of this function
/*
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  describe('when given 1 and 3', () => {
    it('should return 4', () => {
      assert.equal(calculateNumber(1, 3), 4);
    });
  });
  describe('when given 1 and 3.7', () => {
    it('should return 5', () => {
      assert.equal(calculateNumber(1, 3.7), 5);
    });
  });
  describe('when given 1.2 and 3.7', () => {
    it('should return 5', () => {
      assert.equal(calculateNumber(1.2, 3.7), 5);
    });
  });
  describe('when given 1.5 and 3.7', () => {
    it('should return 6', () => {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  });
  describe('when given large numbers', () => {
    it('should return a large number', () => {
      assert.equal(calculateNumber(100000, 300000), 400000);
    });
  });
  describe('when given negative numbers', () => {
    it('should return a negative number', () => {
      assert.equal(calculateNumber(-1, -3), -4);
    });
  });
  describe('when given decimal numbers', () => {
    it('should return a decimal number', () => {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  });
  describe('when given identical numbers', () => {
    it('should return the same number', () => {
      assert.equal(calculateNumber(4, 4), 8);
    });
  });
});
*/
const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('calculateNumber', () => {
    it('rounding of a', () => {
        assert.equal(calculateNumber(15.78, 2), 18);
        assert.equal(calculateNumber(1.2, 0), 1);
        assert.equal(calculateNumber(3.5, 2), 6);
    });

    it('rounding of b', () => {
        assert.equal(calculateNumber(2, 15.78), 18);
        assert.equal(calculateNumber(0, 1.2), 1);
        assert.equal(calculateNumber(2, 3.5), 6);
    });

    it('suming of a and b', () => {
        assert.equal(calculateNumber(15.78, 2.5), 19);
        assert.equal(calculateNumber(1.2, 0.2), 1);
        assert.equal(calculateNumber(3.5, 2.7), 7);
    });
})
