/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  //the module who executes the tests
  preset: 'ts-jest',
  //could be jsdom for example
  testEnvironment: 'node',
  //verbose mode
  verbose: true,
  //allows coverage
  collectCoverage: true,
  //where the coverage will be saved
  coverageDirectory: "./coverage",
  //generate coverage report
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  //whe can do it also for a specific file
  './src/stats.ts':{
    statements: 100,
    branches: 100,
    functions: 100,
    lines: 100
  }
};