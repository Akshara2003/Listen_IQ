import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:7002/api', //  Express backend
  withCredentials: true // only if  using cookies / auth
});

export default api;
