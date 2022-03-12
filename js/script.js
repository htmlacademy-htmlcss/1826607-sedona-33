const modal = document.querySelector('.modal-fade'),
modal_open = document.querySelector('.modal-open'),
modal_close = document.querySelector('.modal-close');

modal_open.addEventListener('click', ()=> {
    modal.classList.toggle('modal-show');
});

modal_close.addEventListener('click', ()=> {
    modal.classList.toggle('modal-show');
});