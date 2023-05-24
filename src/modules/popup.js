export default async (index, api) => {
    // Retrieve the mealID from our meals list
    const mealID = api.retrieveMealID(index);
    const requestURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    const request = new Request(requestURL);

    // Create the GET request for the specified meal
    const response = await fetch(request);
    const responseObj = await response.json();

    // Comments game ID: XwWY2NVPZAn0YyuYeG9s
    const commentsURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XwWY2NVPZAn0YyuYeG9s/comments?item_id=item1';
    const commentsGET = new Request(commentsURL);
    const commentsRes = await fetch(commentsGET);
    const commentsObj = await commentsRes.json();
    console.log(commentsObj[0]);


    // Initialise and setting the meal details
    const ppMealName = document.querySelector('.pp-meal-name');
    const ppMealArea = document.querySelector('#pp-meal-area');
    const ppMealCategory = document.querySelector('#pp-meal-category');
    const popupSection = document.querySelector('.popup-section');
    const ppMealImg = document.querySelector('#pp-image');

    //Initialise the comments details
    const commentsContainer = document.querySelector('.pp-comments-container');
    const comment = document.createElement('li');
    comment.innerHTML = `
    ${commentsObj[0].creation_date}<br>
    ${commentsObj[0].username}: ${commentsObj[0].comment}
    `;
    commentsContainer.appendChild(comment);


    console.log(responseObj.meals[0].strMealThumb);
    ppMealImg.src = responseObj.meals[0].strMealThumb;
    ppMealName.textContent = responseObj.meals[0].strMeal;
    ppMealArea.textContent = responseObj.meals[0].strArea;
    ppMealCategory.textContent = responseObj.meals[0].strCategory;
    popupSection.classList.toggle('hide');
}

