const addNumbers = require('./addNumbers')

describe('addNumbers', () => {
  test('adds the numbers together', () => {
    expect(addNumbers(1,1)).toEqual(2);
  });
});
