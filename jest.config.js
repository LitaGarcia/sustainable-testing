/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  //the module who executes the tests
  preset: 'ts-jest',
  //could be jsdom for example
  testEnvironment: 'node',
  //verbose mode
  verbose: true
};