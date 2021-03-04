import { Horloge } from './horloge.js';
import { hideModal, showModal } from './modal.js';

const divEl = document.querySelector('.horloge');
const clock = new Horloge(divEl);
clock.start();

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
