import { atom, selector } from 'recoil';
import { blessingPortalBuffExpRate } from '../utils/calculate/portal';

export const portalBuffState = atom({
  key: 'portalBuffState',
  default: 0,
});

export const buffExpRateSelector = selector({
  key: 'buffExpRateSelector',
  get: ({ get }) => {
    const portalBuffLevel = get(portalBuffState);
    const expRate = blessingPortalBuffExpRate(portalBuffLevel);
    return expRate;
  },
});
