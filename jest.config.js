export default {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['./jest.setup.js'],
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest',
    },
  };
  