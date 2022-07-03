module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  silent: true,
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['<rootDir>/dist'],
  setupFilesAfterEnv: ['<rootDir>/jestImports.ts'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest'
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/src/store',
    '<rootDir>/src/types',
    '<rootDir>/src/constants.ts',
    '<rootDir>/src/index.ts',
    '<rootDir>/src/App.tsx',
    '<rootDir>/src/data.ts'
  ],
  // https://github.com/react-hook-form/resolvers/issues/396
  resolver: '<rootDir>/.jest/resolver.js'
};
