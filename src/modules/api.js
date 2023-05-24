class API {
    baseURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

    involveURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

    constructor() {
      this.url = this.baseURL;
      this.involveUrl = this.involveURL;
    }

    fetchData = async (url, method, body, headers = {}) => {
      const settingRequest = {
        method,
        headers,
      };
      let request;
      if (method === 'GET') {
        request = new Request(url, settingRequest);
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

    getMeal = async () => {
      const response = await this.fetchData(this.url, 'GET');
      return response;
    };

    createApp = async () => {
      const endPoint = 'apps/';
      const url = this.involveUrl + endPoint;
      const responseJson = await this.fetchData(url, 'POST');
      return responseJson;
    };

    createLikes = async (id, body) => {
      const endPoint = `apps/${id}/likes/`;
      const url = this.involveUrl + endPoint;
      const headers = {
        'Content-Type': 'application/json',
      };
      const responseJson = await this.fetchData(url, 'POST', body, headers);
      return responseJson;
    }

    getLikes = a
}

export default API;