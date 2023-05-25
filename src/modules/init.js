import img from '../assets/logo.png';
import footer from './home/footer.js';

import API from './api.js';
import displayItems from './home/displayItems.js';
import postLike from './home/postLike.js';
import displayLikes from './home/updateLike.js';
import itemsCounter from './home/itemsCounter.js';
import popup from './popup/popup.js';

const api = new API();

export default async () => {
  document.querySelector('.logo-img').setAttribute('src', img);
  await displayItems(api);
  footer();

  // Items counting process
  const items = document.querySelectorAll('.items');
  const h3 = document.querySelector('h3');
  h3.innerHTML = `We have ${itemsCounter(items)} Dishes`;
  await displayLikes(api);

  // Like button event listener
  const likes = document.querySelectorAll('.like-btn');
  likes.forEach((like, index) => {
    like.addEventListener('click', async () => {
      await postLike(index, api);
      await displayLikes(api);
    });
  });

  // Comments button event listener
  const comments = document.querySelectorAll('.comment');
  comments.forEach((comment, index) => {
    comment.addEventListener('click', () => {
      popup(index, api);
    });
  });
};

// Close popup button
const popupSection = document.querySelector('.popup-section');
const closeIcon = document.querySelector('#close-icon');
closeIcon.addEventListener('click', () => {
  popupSection.classList.toggle('hide');
});

// Setting footer element
