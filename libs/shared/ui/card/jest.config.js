module.exports = {
  name: 'shared-ui-card',
  preset: '../../../../jest.config.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: ['jest-preset-angular/build/InlineFilesTransformer', 'jest-preset-angular/build/StripStylesTransformer'],
    },
  },
  coverageDirectory: '../../../../coverage/libs/shared/ui/card',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};