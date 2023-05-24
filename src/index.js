import './style.scss';
import img from './assets/logo.png';
import API from './modules/api.js';
import popup from './modules/popup.js';

const api = new API();
const popupSection = document.querySelector('.popup-section');

const container = document.querySelector('.item-container');
const test = async () => {
  const result = await api.getMeal();
  api.mealsList = result.meals;
  container.innerHTML = result.meals.reduce((output, food) => (
    `${output}
    <div class="items">
    <div class="item-img-container">
        <img class='item-img' src="${food.strMealThumb}" alt="item-img">
    </div>
    <div class="detail-container">
        <span>${food.strMeal}</span>
    </div>
    <div class="comment-btn">
    <div class="likes">
            <span>1</span>
        <button class="like-btn"><i class="fa-regular fa-heart"></i></button>
        </div>
        <button class="comment">comments</button>
    </div>
    </div>
    `
  ), '');
  const likes = document.querySelectorAll('.like-btn');
  likes.forEach((like, index) => {
    like.addEventListener('click', () => {
      popup(index, api);
      // likeMe(index);
    });
  });
};

const closeIcon = document.querySelector('#close-icon');
closeIcon.addEventListener('click', () => {
  popupSection.classList.toggle('hide');
});
window.onload = () => {
  document.querySelector('.logo-img').setAttribute('src', img);
  test();
};
