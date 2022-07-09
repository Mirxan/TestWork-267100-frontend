import axios from 'axios';
import { TokenService } from '@/utils/storage';

const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 35000,
});

service.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken();
    if (token) config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error && error.response) {
      const status = error.response.status;
      const unauthorized = status == 401 || status == 419;
      if (unauthorized) {
        logout();
      }
    }
    return Promise.reject(error.response);
  }
);

export default service;

async function logout() {
  TokenService.removeToken();
  const route = router.history.current.name;
  if (route != 'login') router.push({ name: 'login' });
}
