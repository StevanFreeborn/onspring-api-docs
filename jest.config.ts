import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.ts',
    '!**/tests/**',
    '!/node_modules',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'text', 'html'],
  testMatch: ['**/tests/**/*.(test|spec|jest).ts'],
  testPathIgnorePatterns: ['tests/(setup|testUtils).ts'],
  verbose: true,
};

export default createJestConfig(config);
