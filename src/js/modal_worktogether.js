// const modal = document.querySelector('.modal');
const modalBackdrop = document.querySelector('.backdrop');
const closeButton = document.querySelector('.close');

export const addListener = () => {
  closeButton.addEventListener('click', removeModalStyles);
  modalBackdrop.addEventListener('click', removeModalStyles);
  document.addEventListener('keydown', handleEscapeKey);
};

function removeModalStyles() {
  modalBackdrop.classList.remove('is-open');
  closeButton.removeEventListener('click', removeModalStyles);
  modalBackdrop.removeEventListener('click', removeModalStyles);
  document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    removeModalStyles();
  }
}
