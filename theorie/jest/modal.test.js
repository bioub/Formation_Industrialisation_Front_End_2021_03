const { showModal } = require('./modal');

test('showModal function (version JSDOM)', () => {
  const divEl = document.createElement('div');
  showModal(divEl);
  expect(divEl.classList.contains('is-active')).toBeTruthy();
});

test('showModal function (version fake + spy)', () => {
  const fakeEl = {
    classList: {
      add: jest.fn(),
    },
  };
  showModal(fakeEl);
  expect(fakeEl.classList.add).toHaveBeenCalledWith('is-active');
});
