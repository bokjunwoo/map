import { handleError } from '../utils/error';
import { idApi } from './axiosConfig';

// 유저 ocid
export const getUserId = async (name: string) => {
  try {
    const response = await idApi.get(`id?character_name=${name}`);
    return response.data.ocid;
  } catch (error) {
    handleError(error);
    throw error;
  }
};
