// Module IIFE
// Immediately Invoked Function Expression
(function (global, FormationTech) {
  'use strict';

  const divEl = document.querySelector('.horloge');
  const clock = new FormationTech.Horloge(divEl);
  clock.start();

  document.addEventListener('click', (event) => {
    /** @type {HTMLElement} */
    const target = event.target;
    if (target.classList.contains('show-modal')) {
      FormationTech.Modal.show();
      return;
    }
    if (target.classList.contains('hide-modal')) {
      FormationTech.Modal.hide();
      return;
    }
  });
})(window, FormationTech);
