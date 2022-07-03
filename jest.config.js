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
  coveragePathIgnorePatterns: ['<rootDir>/node_modules', 'index.ts', 'App.tsx']
};
