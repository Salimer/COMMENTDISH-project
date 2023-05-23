export default async () => {
    const requestURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const responseObj = await response.json();
    console.log(responseObj.meals[0].strCategory);

    const ppMealName = document.querySelector('.pp-meal-name');
    const ppMealArea = document.querySelector('#pp-meal-area');
    const ppMealCategory = document.querySelector('#pp-meal-category');
    const popupSection = document.querySelector('.popup-section');

    ppMealName.textContent = responseObj.meals[0].strMeal;
    ppMealArea.textContent = responseObj.meals[0].strArea;
    ppMealCategory.textContent = responseObj.meals[0].strCategory;
    popupSection.classList.toggle('hide');
}
