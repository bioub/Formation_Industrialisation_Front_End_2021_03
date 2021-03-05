const { pileOuFace, hello } = require('./exercice');

test('hello', () => {
  expect(hello('Romain')).toEqual('Hello Romain');
});

test('pileOuFace returns face', () => {
  expect(pileOuFace(() => 0)).toEqual('face');
});
