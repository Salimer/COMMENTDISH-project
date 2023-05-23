export default async (index, api) => {
    // Retrieve the mealID from our meals list
    const mealID = api.retrieveMealID(index);
    const requestURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    const request = new Request(requestURL);

    // Create the GET request for the specified meal
    const response = await fetch(request);
    const responseObj = await response.json();

    // Initialise and setting the meal details
    const ppMealName = document.querySelector('.pp-meal-name');
    const ppMealArea = document.querySelector('#pp-meal-area');
    const ppMealCategory = document.querySelector('#pp-meal-category');
    const popupSection = document.querySelector('.popup-section');
    const ppMealImg = document.querySelector('#pp-image');

    console.log(responseObj.meals[0].strMealThumb);
    ppMealImg.src = responseObj.meals[0].strMealThumb;
    ppMealName.textContent = responseObj.meals[0].strMeal;
    ppMealArea.textContent = responseObj.meals[0].strArea;
    ppMealCategory.textContent = responseObj.meals[0].strCategory;
    popupSection.classList.toggle('hide');
}
