import API from './api.js';
import LocalStorage from './localStorage.js';

const api = new API();
class Meal {
  constructor() {
    this.LocalStorage = new LocalStorage();
    this.idApp = this.LocalStorage.getItem('id');
  }

  async addLikes(body) {
    const addLike = api.createLikes(await this.idApp, body);
    return addLike;
  }

  async getLikes() {
    const likes = api.getLikes(await this.idApp);
    return likes;
  }
}
export default Meal;