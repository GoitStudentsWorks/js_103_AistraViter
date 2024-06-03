import { addListener } from './modal_worktogether';
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

function handleSubmit(event) {
  event.preventDefault();

  const email = document.querySelector('#user-email').value;
  const message = document.querySelector('#user-message').value;

  if (!email || !message) {
    alert('Please fill in both the email and message fields.');
    return;
  }

  const data = {
    email: email,
    comment: message,
  };

  async function sendRequest(data) {
    try {
      const response = await axios.post('/requests', data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.data.title && response.data.message) {
        openModal();
        form.reset();
      } else {
        alert('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  }

  sendRequest(data);
}

function openModal() {
  addListener();
  const modalBackdrop = document.querySelector('.backdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.add('is-open');
  }
}

const form = document.querySelector('#work-together-form');
if (form) {
  form.addEventListener('submit', handleSubmit);
}

const closeModalButton = document.querySelector('#closeModal');
if (closeModalButton) {
  closeModalButton.addEventListener('click', closeModal);
}

// Неправильна почта та інпут
document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('user-email');
  const emailError = document.getElementById('email-error');
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  emailInput.addEventListener('input', function () {
    if (emailPattern.test(emailInput.value)) {
      emailInput.classList.remove('invalid');
      emailInput.classList.add('valid');
      emailError.style.display = 'none';
    } else {
      emailInput.classList.remove('valid');
      emailInput.classList.add('invalid');
      emailError.style.display = 'block';
    }
  });

  document
    .getElementById('work-together-form')
    .addEventListener('submit', function (event) {
      if (!emailPattern.test(emailInput.value)) {
        event.preventDefault();
        emailInput.classList.add('invalid');
        emailError.style.display = 'block';
      }
    });
});
