export default async (i, api) => {
  const body = {
    item_id: `${i}`,
  };
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XwWY2NVPZAn0YyuYeG9s/likes';
  const headers = {
    'Content-Type': 'application/json',
  };
  const result = await api.fetchData(url, 'POST', body, headers);
  // await displayLikes();
  console.log(result);
  // console.log(i);
  return result;
};