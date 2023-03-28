import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
});

export const api = {
  get(endpoint: string) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint: string, body: any) {
    return axiosInstance.post(endpoint, body);
  },
};
