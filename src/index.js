import './style.scss';
import img from './assets/logo.png';
import API from './modules/api.js';

const api = new API();
const popupSection = document.querySelector('.popup-section');

const container = document.querySelector('.item-container');
const likeMe = async (i) => {
  const body = {
    item: `${i}`,
  };
  const result = await api.createLikes('NofP2ryx69uYAWnWEVJ9', body);
  console.log(result);
};
const test = async () => {
  const result = await api.getMeal();
  container.innerHTML = result.meals.reduce((output, food) => (
    `${output
    }
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
      // popupSection.classList.toggle('hide');
      likeMe(index);
    });
  });
};

const closeIcon = document.querySelector('#close-icon');
closeIcon.addEventListener('click', () => {

});
window.onload = () => {
  document.querySelector('.logo-img').setAttribute('src', img);
  test();
};
