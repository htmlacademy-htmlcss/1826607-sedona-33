const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modal-open');
const modalOpenMainBtn = document.querySelector('.js-modal');

const modalClose = document.querySelector('.modal-close');

modalOpen.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal-show');
});

modalOpenMainBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal-show');
});

modalClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal-show');
});
