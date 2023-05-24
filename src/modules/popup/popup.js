import displayComments from "./displayComments.js";
import postComment from "./postComment.js";
import commentsCounter from "./commentsCounter.js";

export default async (index, api) => {
  // Retrieve the mealID from our meals list
  const mealID = api.retrieveMealID(index);
  const requestURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;

  // Create the GET request for the specified meal
  const responseObj = await api.fetchData(requestURL, 'GET');

  // Comments GET request
  const commentsURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XwWY2NVPZAn0YyuYeG9s/comments?item_id=${index}`;
  let commentsObj = await api.fetchData(commentsURL, 'GET');

  // Initialise and setting the meal details
  const ppMealName = document.querySelector('.pp-meal-name');
  const ppMealArea = document.querySelector('#pp-meal-area');
  const ppMealCategory = document.querySelector('#pp-meal-category');
  const popupSection = document.querySelector('.popup-section');
  const ppMealImg = document.querySelector('#pp-image');

  // Initialise the comments details
  const commentsCount = document.querySelector('#comments-number');
  commentsCount.textContent = `${commentsCounter()}`;
  
  displayComments(commentsObj);

  // posting new comment
  const newCommentUsername = document.querySelector('.your-name');
  const newCommentMsg = document.querySelector('.msg');
  const newCommentBtn = document.querySelector('#pp-comment-btn');

  newCommentBtn.addEventListener('click', async () => {
    if((newCommentUsername.value === '' || newCommentMsg.value === '')) {
      alert('empty username')
    } else {
      console.log(newCommentMsg.value);
      await postComment(api, index);
      commentsObj = await api.fetchData(commentsURL, 'GET');
      displayComments(commentsObj);
    }
  });

  ppMealImg.src = responseObj.meals[0].strMealThumb;
  ppMealName.textContent = responseObj.meals[0].strMeal;
  ppMealArea.textContent = responseObj.meals[0].strArea;
  ppMealCategory.textContent = responseObj.meals[0].strCategory;
  popupSection.classList.toggle('hide');
};
