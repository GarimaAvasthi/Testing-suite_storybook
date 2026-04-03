import type { Config } from 'jest';

const config: Config = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coverageProvider: 'v8',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/coverage/', '/storybook-static/'],
};

export default config;
