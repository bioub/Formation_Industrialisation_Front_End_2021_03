import { hideModal, showModal } from './modal';
import '../app.css';

document.addEventListener('click', (event) => {
  import('./horloge').then(({ Horloge }) => {
    const divEl = document.querySelector('.horloge');
    const clock = new Horloge(divEl);
    clock.start();
  });

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

console.log('ABC'.repeat(3));
