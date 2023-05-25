export default async (api, commentsURL, commentsObj) => {
    return new Promise (async (resolve, reject) => {
        try {
            commentsObj = await api.fetchData(commentsURL, 'GET');
            resolve(commentsObj);
            return commentsObj;
          } catch (error) {
            reject();
          }
    })
}