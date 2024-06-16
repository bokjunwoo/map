import { idApi } from './axiosConfig';

// 유저 ocid
export const getUserId = async (name: string) => {
  try {
    const response = await idApi.get(`?character_name=${name}`);
    return response.data.ocid;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};
