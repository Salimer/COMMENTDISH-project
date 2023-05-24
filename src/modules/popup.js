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


    // Initialise and setting the meal details
    const ppMealName = document.querySelector('.pp-meal-name');
    const ppMealArea = document.querySelector('#pp-meal-area');
    const ppMealCategory = document.querySelector('#pp-meal-category');
    const popupSection = document.querySelector('.popup-section');
    const ppMealImg = document.querySelector('#pp-image');

    //Initialise the comments details
    const commentsCount = document.querySelector('#comments-number');
    commentsCount.textContent = `${commentsObj.length}`
    const commentsContainer = document.querySelector('.pp-comments-container');
    commentsObj.forEach((commentObj) => {
        const comment = document.createElement('li');
        comment.className = 'pp-comment';
        comment.innerHTML = `
    ${commentObj.creation_date}
    ${commentObj.username} : ${commentObj.comment}
    `;
    commentsContainer.appendChild(comment);
    });

    // posting new comment
    const newCommentUsername = document.querySelector('.your-name');
    const newCommentMsg = document.querySelector('.msg');
    const newCommentBtn = document.querySelector('#pp-comment-btn');

    newCommentBtn.addEventListener('click', async () => {
        if(newCommentUsername !== '' && newCommentMsg !== '') {
            const body = {
                "item_id": "item1",
                "username": newCommentUsername.value,
                "comment": newCommentMsg.value
            }
            
            const request = new Request('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XwWY2NVPZAn0YyuYeG9s/comments', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
              });
              await fetch(request);
              newCommentUsername.value = '';
              newCommentMsg.value = '';
        }
    })
    
    ppMealImg.src = responseObj.meals[0].strMealThumb;
    ppMealName.textContent = responseObj.meals[0].strMeal;
    ppMealArea.textContent = responseObj.meals[0].strArea;
    ppMealCategory.textContent = responseObj.meals[0].strCategory;
    popupSection.classList.toggle('hide');
}

