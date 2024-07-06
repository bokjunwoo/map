import { atom, selector } from 'recoil';

export const portalCheckState = atom({
  key: 'portalCheckState',
  default: {
    rune: false,
    sundayEvent: false,
  },
});

export const runeExpRateSelector = selector({
  key: 'runeExpRateSelector',
  get: ({ get }) => {
    const portalBuffLevel = get(portalCheckState);
    const expRate = portalBuffLevel.rune ? 100 : 0;
    return expRate;
  },
});

export const sundayEventExpRateRateSelector = selector({
  key: 'sundayEventExpRateRateSelector',
  get: ({ get }) => {
    const portalBuffLevel = get(portalCheckState);
    const expRate = portalBuffLevel.sundayEvent ? 200 : 0;
    return expRate;
  },
});
