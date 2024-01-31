'use strict';

const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const overlay = document.querySelector('.overlay');
const btnCloseModal1 = document.querySelector('.close-modal1');
const btnCloseModal2 = document.querySelector('.close-modal2');
const btnCloseModal3 = document.querySelector('.close-modal3');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal1 = function () {
  modal1.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openModal2 = function () {
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openModal3 = function () {
  modal3.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal1 = function () {
  modal1.classList.add('hidden');

  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    if (i === 0) openModal1();
    else if (i === 1) openModal2();
    else if (i === 2) openModal3();
  });
}

// btnCloseModal.addEventListener('click', closeModal);
btnCloseModal1.addEventListener('click', closeModal);
btnCloseModal2.addEventListener('click', closeModal);
btnCloseModal3.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function closeModal() {
  modal1.classList.add('hidden');
  modal2.classList.add('hidden');
  modal3.classList.add('hidden');
  overlay.classList.add('hidden');
}

document.addEventListener('keydown', function (e) {
  if (
    e.key === 'Escape' &&
    (!modal1.classList.contains('hidden') ||
      !modal2.classList.contains('hidden') ||
      !modal3.classList.contains('hidden'))
  ) {
    closeModal();
  }
});
