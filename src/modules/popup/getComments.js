export default (api, commentsURL, commentsObj) => new Promise((resolve, reject) => {
  try {
    commentsObj = api.fetchData(commentsURL, 'GET');
    resolve(commentsObj);
  } catch (error) {
    reject();
  }
});