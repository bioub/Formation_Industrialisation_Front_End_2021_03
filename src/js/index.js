// Module IIFE
// Immediately Invoked Function Expression
(function (global, Horloge) {
  'use strict';

  const divEl = document.querySelector('.horloge');
  const clock = new Horloge(divEl);
  clock.start();

  const showModalEls = document.querySelector('.show-modal');
  const hideModalEls = document.querySelector('.hide-modal');

  document.addEventListener('click', (event) => {
    /** @type {HTMLElement} */
    const target = event.target;
    if (target.classList.contains('show-modal')) {
      showModal();
      return;
    }
    if (target.classList.contains('hide-modal')) {
      hideModal();
      return;
    }
  });
})(window, Horloge);
