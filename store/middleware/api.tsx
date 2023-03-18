import axios from 'axios';
const API = axios.create({ baseURL: 'https://reqres.in' });

API.interceptors.request.use((req) => {
  return req;
});

export default API;
