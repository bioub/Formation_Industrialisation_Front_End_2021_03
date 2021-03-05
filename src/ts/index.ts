import { hideModal, showModal } from './modal';
import '../app.scss';

document.addEventListener('click', (event: MouseEvent) => {
  import('./horloge').then(({ Horloge }) => {
    const divEl = document.querySelector<HTMLElement>('.horloge');
    const clock = new Horloge(divEl);
    clock.start();
  });

  const target: HTMLElement = event.target as HTMLElement;
  if (target.classList.contains('show-modal')) {
    showModal();
    return;
  }
  if (target.classList.contains('hide-modal')) {
    hideModal();
    return;
  }
});
