export default (responseObj) => {
    // Initialise and setting the meal details
  const ppMealName = document.querySelector('.pp-meal-name');
  const ppMealArea = document.querySelector('#pp-meal-area');
  const ppMealCategory = document.querySelector('#pp-meal-category');
  const popupSection = document.querySelector('.popup-section');
  const ppMealImg = document.querySelector('#pp-image');


  ppMealImg.src = responseObj.meals[0].strMealThumb;
  ppMealName.textContent = responseObj.meals[0].strMeal;
  ppMealArea.textContent = responseObj.meals[0].strArea;
  ppMealCategory.textContent = responseObj.meals[0].strCategory;
}