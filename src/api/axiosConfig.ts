import axios from 'axios';

const HOST = 'https://open.api.nexon.com/maplestory/v1';

const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({ baseURL });
  instance.interceptors.request.use((config) => {
    config.headers['x-nxopen-api-key'] =
      'live_b865299659dd255180f43e6bc425b858930871521b36e2c53b5e069965362162efe8d04e6d233bd35cf2fabdeb93fb0d';
    return config;
  });
  return instance;
};

// Axios 인스턴스 생성
export const idApi = createAxiosInstance(HOST);
export const characterApi = createAxiosInstance(`${HOST}/character`);
export const userApi = createAxiosInstance(`${HOST}/user`);
