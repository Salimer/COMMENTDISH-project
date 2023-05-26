import like from '../../assets/like.svg';

// display list of items on the home page
export default async (api) => {
  const container = document.querySelector('.item-container');
  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
  const result = await api.fetchData(url, 'GET');
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
              
          <button class="like-btn"><img class="like-icon" src="${like}" class="" alt="like-icon"></button>
          <span class="nos-of-like">0</span>
          </div>
          <button class="comment">comments</button>
      </div>
      </div>
      `
  ), '');
};