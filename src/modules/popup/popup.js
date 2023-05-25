import displayComments from "./displayComments.js";
import postComment from "./postComment.js";
import commentsCounter from "./commentsCounter.js";
import setMealDetails from "./setMealDetails.js";
import getComments from "./getComments.js";

export default async (index, api) => {
  // Retrieve the mealID from our meals list
  const mealID = api.retrieveMealID(index);
  const requestURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;

  // Create the GET request for the specified meal
  const responseObj = await api.fetchData(requestURL, 'GET');
  setMealDetails(responseObj);

  // Comments GET request
  const commentsURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XwWY2NVPZAn0YyuYeG9s/comments?item_id=${index}`
  let commentsObj = [];
  getComments(api, commentsURL, commentsObj).then((commentsObj) => {
    displayComments(commentsObj);
    console.log(commentsObj);
  }).catch(() => {
    console.error('No comments are initiated for this product');
  })

  // Initialise the comments details
  const commentsCount = document.querySelector('#comments-number');
  commentsCount.textContent = `${commentsCounter()}`;

  // posting new comment
  const newCommentUsername = document.querySelector('.your-name');
  const newCommentMsg = document.querySelector('.msg');
  const newCommentBtn = document.querySelector('#pp-comment-btn');

  newCommentBtn.addEventListener('click', async () => {
    if((newCommentUsername.value === '' || newCommentMsg.value === '')) {
      alert('empty username')
    } else {
      await postComment(api, index);
      commentsObj = await api.fetchData(commentsURL, 'GET');
      displayComments(commentsObj);
    }
  });
 
  const popupSection = document.querySelector('.popup-section');
  popupSection.classList.toggle('hide');
};
