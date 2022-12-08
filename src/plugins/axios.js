import axios from "axios";

axios.defaults.baseURL = "https://foreca-weather.p.rapidapi.com";
axios.interceptors.request.use((config) => {
  config.headers = {
    "X-RapidAPI-Key": "31748d23aamsh2d48b41ab5170a6p1abb6cjsnfdd9fe5a475e",
    "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
  };
  return config;
});
