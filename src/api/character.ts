import { characterApi } from './axiosConfig';

// 하이퍼스탯
export const getHyperStat = async (
  ocid: string
): Promise<CharacterHyperStat> => {
  try {
    const response = await characterApi.get(`/hyper-stat?ocid=${ocid}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};

// 어빌리티
export const getAbility = async (ocid: string): Promise<CharacterAbility> => {
  try {
    const response = await characterApi.get(`/ability?ocid=${ocid}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};

// 링크스킬(엘프의 축복)
export const getLinkSkill = async (
  ocid: string
): Promise<CharacterLinkSkill> => {
  try {
    const response = await characterApi.get(`/link-skill?ocid=${ocid}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};

// 5차스킬(쓸만한 홀리심볼)
export const getVmatrix = async (
  ocid: string
): Promise<CharacterVCoreEquipment> => {
  try {
    const response = await characterApi.get(`/vmatrix?ocid=${ocid}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};

// 6차스킬(솔 야누스)
export const getHexaMatrix = async (
  ocid: string
): Promise<CharacterHexaCoreEquipment> => {
  try {
    const response = await characterApi.get(`/hexamatrix?ocid=${ocid}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};

// 장비아이템
export const getItemEquipment = async (
  ocid: string
): Promise<CharacterItemEquipment> => {
  try {
    const response = await characterApi.get(`/item-equipment?ocid=${ocid}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};

// 캐쉬아이템
export const getCashItemEquipment = async (
  ocid: string
): Promise<CharacterCashItemEquipment> => {
  try {
    const response = await characterApi.get(`/cashitem-equipment?ocid=${ocid}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};
