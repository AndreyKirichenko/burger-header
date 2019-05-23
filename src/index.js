import './styles/index.scss';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', function (event) {
  event.currentTarget.classList.toggle('burger--active');
  menu.classList.toggle('header__menu--active');
});

