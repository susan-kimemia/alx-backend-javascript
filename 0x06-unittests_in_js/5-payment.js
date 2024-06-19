//  new function named sendPaymentRequestToApi. The function takes two
// argument totalAmount, and totalShipping The function calls the
// Utils.calculateNumber function with type SUM, totalAmount as a,
// totalShipping as b and display in the console the message The total
// is: <result of the sum></result>

// 3-payment.js
const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
