export default async (api) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XwWY2NVPZAn0YyuYeG9s/likes';
  const result = await api.fetchData(url, 'GET');
  const likes = document.querySelectorAll('.nos-of-like');
  if (typeof result !== 'string') {
    api.mealsList.forEach((meal, index) => {
      const match = result.find((obj2) => obj2.item_id === `${index}`);
      if (match) {
        console.log(match);
        likes[index].innerHTML = match.likes;
      } else {
        console.log('no-match');
      }
    });
  } else {
    likes.forEach((like) => {
      like.innerHTML = '0';
    });
  }
};
