// Module IIFE
// Immediately Invoked Function Expression
(function (global, Horloge) {
  'use strict';

  const modalEl = document.querySelector('.modal');

  function showModal() {
    modalEl.classList.add('is-active');
  }

  function hideModal() {
    modalEl.classList.remove('is-active');
  }

  global.showModal = showModal;
  global.hideModal = hideModal;
})(window, Horloge);
