/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    //the module who executes the tests
    preset: 'ts-jest',
    //could be jsdom for example
    testEnvironment: 'node',
    //where the coverage will be saved
    coverageDirectory: "./coverage"
};