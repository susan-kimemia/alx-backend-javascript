// Combining descriptions and testing using chai

const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('#calculateNumber()', () => {
  describe('when type is SUM', () => {
    it('should return the sum of a and b', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('should return the sum of a and b', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('should return the sum of a and b', () => {
      expect(calculateNumber('SUM', 5.6, 1)).to.equal(7);
    });
    it('should return the sum of a and b', () => {
      expect(calculateNumber('SUM', 1, 6.6)).to.equal(8);
    });
  });

  describe('#calwhen type is SUBTRACT', () => {
    it('should return a minus b', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4)
    });
    it('should return a minus b', () => {
      expect(calculateNumber('SUBTRACT', 4, 2)).to.equal(2)
    });
    it('should return a minus b', () => {
      expect(calculateNumber('SUBTRACT', 10, 2)).to.equal(8)
    });
    it('should return a minus b', () => {
      expect(calculateNumber('SUBTRACT', 2, 10)).to.equal(-8)
    });
    it('should return a minus b', () => {
      expect(calculateNumber('SUBTRACT', -4, -4)).to.equal(0)
    });
  });

  describe('when type is DIVIDE', () => {
    it('should return a divided by b', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)
    });
    it('should return a divided by b', () => {
      expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5)
    });
    it('should return a divided by b', () => {
      expect(calculateNumber('DIVIDE', 2, 2)).to.equal(1)
    });
    it('should return Error when b is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error')
    });
    it('should return Error when b is 0', () => {
      expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error')
    });
  });
});
