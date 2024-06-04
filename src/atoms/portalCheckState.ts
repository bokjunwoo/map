import { atom } from 'recoil';

export const portalCheckState = atom({
  key: 'portalCheckState',
  default: {
    rune: false,
    sundayEvent: false,
  },
});
