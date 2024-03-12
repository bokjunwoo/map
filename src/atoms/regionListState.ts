import { atom } from 'recoil';

export const regionListState = atom<string[]>({
  key: 'regionListState',
  default: [],
});
