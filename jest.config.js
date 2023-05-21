/** @type {import('ts-jest').JestConfigWithTsJest} */

const jestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['app', 'node_modules']
}

module.exports = jestConfig
