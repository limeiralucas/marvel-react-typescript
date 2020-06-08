import axios from "axios";

const API_URL = "https://gateway.marvel.com/v1/public";

const apiService = axios.create({
  baseURL: API_URL,
  params: {},
});

apiService.interceptors.request.use((config) => {
  config.params = {
    apikey: process.env.MARVEL_API_KEY,
    hash: process.env.MARVEL_API_HASH,
    ts: process.env.MARVEL_API_TS,
    ...config.params,
  };

  return config;
});

export default apiService;
