import { atom } from 'recoil';

export const userLevelState = atom<number>({
  key: 'userLevelState',
  default: 260,
});
