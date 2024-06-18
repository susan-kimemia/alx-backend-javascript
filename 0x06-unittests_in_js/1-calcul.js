// a function named calculateNumber. It should accepts
// two arguments (number) a and b
// The function should round a and b and return the sum of it

function calculateNumber(type, a, b) {
  const A = Math.round(a);
  const B = Math.round(b);

  if (type === 'SUM') {
    return A + B;
  }
  if (type === 'SUBTRACT') {
    return A - B;
  }
  if (type === 'DIVIDE') {
    if (B === 0) {
      return 'Error';
    }
    return A / B;
  }
}

module.exports = calculateNumber;
