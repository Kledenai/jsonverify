export default {
  transform: {},
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {},
  testEnvironment: 'node',
  preset: 'ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
