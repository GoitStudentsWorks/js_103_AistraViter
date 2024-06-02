const modal = document.querySelector('.modal');
const modalBackdrop = document.querySelector('.backdrop');
const closeButton = document.querySelector('.close');

function removeModalStyles() {
  modalBackdrop.classList.remove('is-open');
}

closeButton.addEventListener('click', removeModalStyles);

modalBackdrop.addEventListener('click', removeModalStyles);
