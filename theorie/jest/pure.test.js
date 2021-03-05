const { sum } = require('./pure');

test('sum function', () => {
  expect(sum(1, 2)).toEqual(3);
});
