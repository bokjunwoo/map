import { atom } from 'recoil';

export const itemDropState = atom<number>({
  key: 'itemDropState',
  default: 0,
});
