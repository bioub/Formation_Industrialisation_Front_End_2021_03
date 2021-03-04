import { Horloge } from './horloge';
import { hideModal, showModal } from './modal';

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
