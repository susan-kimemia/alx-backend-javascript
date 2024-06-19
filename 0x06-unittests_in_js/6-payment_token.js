// Create a new function named getPaymentTokenFromAPI
// The function will take an argument called success (boolean)
// When success is true, it should return a resolved promise with
// the object {data: 'Successful response from the API' }
// Otherwise, the function is doing nothing.

function getPaymentTokenFromAPI(succes) {
    if (succes) {
        return Promise.resolve({data: 'Successful response from the API' });
    }
}
module.exports = getPaymentTokenFromAPI;