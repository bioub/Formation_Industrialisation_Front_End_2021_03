const modalEl = document.querySelector('.modal');

export function showModal() {
  modalEl.classList.add('is-active');
}

export function hideModal() {
  modalEl.classList.remove('is-active');
}
