import './style.scss';
import init from './modules/init.js';

await init();

const popupSection = document.querySelector('.popup-section');
const closeIcon = document.querySelector('#close-icon');
closeIcon.addEventListener('click', () => {
  popupSection.classList.toggle('hide');
});
