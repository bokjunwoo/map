import { atom } from 'recoil';

export const mesoDropState = atom<number>({
  key: 'mesoDropState',
  default: 0,
});
