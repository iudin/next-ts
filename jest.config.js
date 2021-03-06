const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'tsconfig.jest.json'
    }
  },
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(jpe?g|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/mocks.js',
    '\\.s?css$': '<rootDir>/__mocks__/mocks.js',
    '^Components/(.*)': '<rootDir>/src/components/$1',
    '^Lib/(.*)': '<rootDir>/lib/$1',
    '^Store/(.*)': '<rootDir>/src/store/$1',
    '^Utils/(.*)': '<rootDir>/src/utils/$1'
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
};
