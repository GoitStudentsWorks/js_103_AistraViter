import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { Keyboard, Manipulation, Navigation } from 'swiper/modules';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const notFoundTextEl = document.querySelector('.empty-text');
const reviewsEl = document.querySelector('.reviews-list');
const navigationEl = document.querySelector('.reviews-navigation');

function fetchReviewsCard() {
  const options = {
    method: 'GET',
  };
  return fetch(`https://portfolio-js.b.goit.study/api/reviews`, options).then(
    response => {
      if (!response.ok) {
        iziToast.error({
          message: 'Sorry, there are no reviews',
        });
        notFoundTextEl.classList.remove('is-hidden');
      }
      return response.json();
    }
  );
}

const createMarkup = cards => {
  return cards.reduce((html, card) => {
    return (
      html +
      `<li class="reviews-item swiper-slide">
    <p class="reviews-text">${card.review}</p>
    <div class="reviewer">
    <img src="${card.avatar_url}" alt="${card.author}" class="reviewer-img">
    <h3 class="reviewer-name">${card.author}</h3>
    </div>
    </li>`
    );
  }, ``);
};

fetchReviewsCard()
  .then(data => {
    const markup = createMarkup(data);
    reviewsEl.insertAdjacentHTML('beforeend', markup);

    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      modules: [Navigation, Manipulation, Keyboard],
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        1260: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
      direction: 'horizontal',
      speed: 500,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      mousewheel: {
        invert: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })
  .catch(error => {
    // console.error(error);

    navigationEl.classList.add('is-hidden');
  });
