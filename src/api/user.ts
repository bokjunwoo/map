import { handleError } from '../utils/error';
import { userApi } from './axiosConfig';

// 유니온
export const getUnionRaider = async (ocid: string): Promise<UnionRaider> => {
  try {
    const response = await userApi.get(`/union-raider?ocid=${ocid}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// 아티팩트
export const getUnionArtifact = async (
  ocid: string
): Promise<UnionArtifact> => {
  try {
    const response = await userApi.get(`/union-artifact?ocid=${ocid}`);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};
