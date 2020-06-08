import axios from "axios";

const API_URL = "https://gateway.marvel.com/v1/public";

const apiService = axios.create({
  baseURL: API_URL,
  params: {},
});

apiService.interceptors.request.use((config) => {
  config.params = {
    apikey: "45c63567f64c1746df3f87e181815e75",
    hash: "abcebe2515ef9159a3e6d92867c146e8",
    ts: "reallylong",
    ...config.params,
  };

  return config;
});

export default apiService;
