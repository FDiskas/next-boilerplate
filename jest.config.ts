import nextJest from 'next/jest.js';

import type { Config } from 'jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/.config/jest.setup.ts'],

  testEnvironment: 'jest-environment-jsdom',
};

export default createJestConfig(config);
