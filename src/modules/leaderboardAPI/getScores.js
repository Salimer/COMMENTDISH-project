export default async (ID = 'yVWfxt83ZzUTJiUF6itj') => {
  const requestURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores`;
  const request = new Request(requestURL);

  const response = await fetch(request);
  const LB = await response.json();

  return LB.result;
};