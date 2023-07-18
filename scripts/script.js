const searchLink = document.querySelector('.search-hotel-link');
const modal = document.querySelector('.modal-overlay');
const closeButton = document.querySelector('.modal-close-button');

searchLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal-show');
});

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal-show');
});
