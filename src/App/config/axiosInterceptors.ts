import axios from "axios";

axios.interceptors.request.use((config) => {
  config.url = `http://localhost:8089/foodApp/${config.url}`;
  return config;
});
