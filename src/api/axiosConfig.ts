import axios from 'axios';

const HOST = 'https://open.api.nexon.com/maplestory/v1';

const axiosInstance = axios.create({
  baseURL: HOST,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers['x-nxopen-api-key'] = '1234';
  return config;
});

export const characterApi = axios.create({
  baseURL: `${HOST}/character`,
});

export const userApi = axios.create({
  baseURL: `${HOST}/user`,
});
