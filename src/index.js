import './style.scss';
import img from './assets/logo.png';
import API from './modules/api.js';
import popup from './modules/popup.js';
import Meal from './modules/meals.js';

const api = new API();
const meals = new Meal();
let mealsArray = [];

const container = document.querySelector('.item-container');
// display likes
const displayLikes = async () => {
  const result = await meals.getLikes();
  const likes = document.querySelectorAll('.nos-of-like');
  if (typeof result !== 'string') {
    mealsArray.forEach((meal, index) => {
      const match = result.find((obj2) => obj2.item_id === `${index}`);
      if (match) {
        console.log(match);
        likes[index].innerHTML = match.likes;
      } else {
        console.log('no-match');
      }
    });
  } else {
    likes.forEach((like) => {
      like.innerHTML = '0';
    });
  }
};

// like an item function
const likeMe = async (i) => {
  const data = {
    item_id: `${i}`,
  };
  const result = await meals.addLikes(data);
  await displayLikes();
  console.log(result);
  return result;
};

// display list of items on the home page
const test = async () => {
  const result = await api.getMeal();
  mealsArray = result.meals;
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
            
        <button class="like-btn"><i class="fa-regular fa-heart"></i></button>
        <span class="nos-of-like">0</span>
        </div>
        <button class="comment">comments</button>
    </div>
    </div>
    `
  ), '');
  // click event to like items
  const likes = document.querySelectorAll('.like-btn');
  likes.forEach((like, index) => {
    like.addEventListener('click', () => {
      likeMe(index);
    });
  });

  const comments = document.querySelectorAll('.comment');
  comments.forEach((comment, index) => {
    comment.addEventListener('click', () => {
      popup(index, api);
    })
  })
};

const popupSection = document.querySelector('.popup-section');
const closeIcon = document.querySelector('#close-icon');
closeIcon.addEventListener('click', () => {
  popupSection.classList.toggle('hide');
});

const itemsCounter = async () => {
  const h3 = document.querySelector('h3');
  const totalIitems = mealsArray.length;
  h3.innerHTML = `We have ${totalIitems} Dishes`;
};

// display display items with number of likes
window.onload = async () => {
  document.querySelector('.logo-img').setAttribute('src', img);
  await test();
  await itemsCounter();
  await displayLikes();
};
