import { atom } from 'recoil';

export const expRateState = atom<number>({
  key: 'expRateState',
  default: 100,
});
