module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRegex:            '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleDirectories:    ['node_modules', 'src'],
}
