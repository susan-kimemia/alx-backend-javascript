## 0x06-unittests_in_js

This repository contains a series of tasks focused on unit testing and integration testing in JavaScript. Each task builds upon the previous one, showcasing different testing techniques and practices.


### Task Descriptions

Here's an overview of each task and what they cover:

#### Task 0: Basic Testing with Mocha and Node Assertion Library

- Install Mocha using npm.
- Set up a test script in `package.json` for running tests using `npm test`.
- Create a function `calculateNumber` that rounds two numbers and returns their sum.
- Write test cases for `calculateNumber` in `0-calcul.test.js`.

#### Task 1: Combining Descriptions

- Enhance the `calculateNumber` function to perform different operations based on a new argument `type` (SUM, SUBTRACT, DIVIDE).
- Write test cases for the updated `calculateNumber` function using the `describe` function for better organization.

#### Task 2: Basic Testing using Chai Assertion Library

- Install Chai using npm.
- Convert the test suite from Task 1 to use Chai's `expect` for more readable tests.

#### Task 3: Spies

- Install Sinon using npm.
- Create a module `Utils` with a `calculateNumber` function.
- Create a new function `sendPaymentRequestToApi` that uses `Utils.calculateNumber` and logs a message.
- Write test cases using Sinon's spies to verify function calls and log messages.

#### Task 4: Stubs

- Build upon Task 3 by introducing stubs.
- Stub the `Utils.calculateNumber` function to return a specific value.
- Verify that the stub and the original function are being called correctly.

#### Task 5: Hooks

- Use `beforeEach` and `afterEach` hooks to ensure a specific behavior before and after tests.
- Write tests for the same function using different inputs and validate console log behavior.

#### Task 6: Async Tests with Done

- Learn how to handle asynchronous testing using the `done` callback.
- Write tests for a function that returns a promise with different conditions.

#### Task 7: Skip

- Learn to skip specific tests temporarily to focus on other issues.
- Use the `it` function to skip failing tests while keeping them in the test suite.

#### Task 8: Basic Integration Testing

- Set up an Express server with an API endpoint.
- Write integration tests to ensure correct behavior of the API endpoints.

#### Task 9: Regex Integration Testing

- Expand upon Task 8 by adding a new API endpoint that validates a parameter using regex.
- Write tests to validate the behavior of the new endpoint with valid and invalid inputs.

#### Task 10: Deep Equality & Post Integration Testing

- Extend the API by adding more endpoints.
- Write tests to check the deep equality of response objects and validate POST request responses.

