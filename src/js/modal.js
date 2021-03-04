// Module IIFE
// Immediately Invoked Function Expression
(function (global) {
  'use strict';

  const modalEl = document.querySelector('.modal');

  function showModal() {
    modalEl.classList.add('is-active');
  }

  function hideModal() {
    modalEl.classList.remove('is-active');
  }

  global.FormationTech = global.FormationTech || {};
  FormationTech.Modal = {
    show: showModal,
    hide: hideModal,
  };
  // global.showModal = showModal;
  // global.hideModal = hideModal;
})(this);
