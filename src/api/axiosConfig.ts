import axios from 'axios';

const HOST = 'https://open.api.nexon.com/maplestory/v1';

const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({ baseURL });
  instance.interceptors.request.use((config) => {
    config.headers['x-nxopen-api-key'] =
      process.env.REACT_APP_MAPLE_OPEN_API_KEY;
    return config;
  });
  return instance;
};

// Axios 인스턴스 생성
export const idApi = createAxiosInstance(HOST);
export const characterApi = createAxiosInstance(`${HOST}/character`);
export const userApi = createAxiosInstance(`${HOST}/user`);
