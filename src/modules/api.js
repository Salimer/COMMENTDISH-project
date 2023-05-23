class API {
    baseURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
    involveURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

    constructor() {
      this.url = this.baseURL;
      this.involveUrl = this.involveURL;
      this.mealsList = [];
    }

    fetchData = async (url, method, body) => {
      const settingRequest = {
        method,
        headers: {
        },
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
      const responseJson = await response.json();
      return responseJson;
    };

    getMeal = async () => {
      const response = await this.fetchData(this.url, 'GET');
      return response;
    };

    createApp = async () => {
      const id = 'NofP2ryx69uYAWnWEVJ9';
      return id;
    };

    createLikes = async (id, body) => {
      const endPoint = `apps/${id}/likes/`;
      const url = this.involveUrl + endPoint;
      const responseJson = await this.fetchData(url, 'POST', body);
      return responseJson;
    }

    retrieveMealID = (index) => {
      return this.mealsList[index].idMeal
    }
}



export default API;