// configured to only run test.ts files
// resulting in no js test files being added to build 
// and hence no test.js files being run by jest
module.exports = {
  testMatch: [ "/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)" ],
  transformIgnorePatterns: ['^.+\\.js$'],
}