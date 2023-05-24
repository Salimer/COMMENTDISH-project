class API {
    involveURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

    constructor() {
      this.involveUrl = this.involveURL;
      this.mealsList = [];
    }

    fetchData = async (url, method, body, headers = {}) => {
      const settingRequest = {
        method,
        headers,
      };
      let request;
      if (method === 'GET') {
        request = new Request(url);
      } else if (method === 'POST') {
        settingRequest.body = JSON.stringify(body);
        request = new Request(url, settingRequest);
      }
      if (!request) throw new Error('invalid');
      const response = await fetch(request);

      const contentType = response.headers.get('content-type');

      if (contentType && (contentType.includes('text/html') || contentType.includes('text/plain'))) {
        const htmlResponse = await response.text();
        return htmlResponse;
      }
      const jsonResponse = await response.json();
      return jsonResponse;
    };

     createApp = async () => {
     const endPoint = 'apps/';
     const url = this.involveUrl + endPoint;
      const responseJson = await this.fetchData(url, 'POST');
      return responseJson;
    };

    retrieveMealID = (index) => this.mealsList[index].idMeal
}

export default API;