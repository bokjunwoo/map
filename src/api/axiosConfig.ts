import axios from 'axios';

const HOST = 'https://open.api.nexon.com/maplestory/v1';

const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({ baseURL });
  instance.interceptors.request.use((config) => {
    config.headers['x-nxopen-api-key'] =
      'test_02be9161f0e3578cea32fe26523e23ab6f07c110fbc65d9cccd5c86b3f6b4619877fa386024dea4f15b3c02ede596c96';
    return config;
  });
  return instance;
};

// Axios 인스턴스 생성
export const idApi = createAxiosInstance(HOST);
export const characterApi = createAxiosInstance(`${HOST}/character`);
export const userApi = createAxiosInstance(`${HOST}/user`);
