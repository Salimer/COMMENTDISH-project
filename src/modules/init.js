import img from '../assets/logo.png';
import API from './api.js';
import displayItems from './home/displayItems.js';
import postLike from './home/postLike.js';
import displayLikes from './home/updateLike.js';
import itemsCounter from './home/itemsCounter.js';

const api = new API();

export default async () => {
  document.querySelector('.logo-img').setAttribute('src', img);
  await displayItems(api);
  await itemsCounter();
  await displayLikes(api);

  // Like button event listener
  const likes = document.querySelectorAll('.like-btn');
  likes.forEach((like, index) => {
    like.addEventListener('click', async () => {
      await postLike(index, api);
      await displayLikes(api);
    });
  });

};