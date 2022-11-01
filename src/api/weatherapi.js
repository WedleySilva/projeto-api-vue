import axios from "axios";
export default class ForecaAPI {
  async LocationSearch(query) {
    try {
      const { data } = await axios.get(`/location/search/${query}`);
      return Promise.resolve(data);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
  async CurrentWeather(id) {
    try {
      const { data } = await axios.get(`/current/${id}`);
      return Promise.resolve(data);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
}
