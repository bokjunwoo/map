import { atom, selector, selectorFamily } from 'recoil';
import { RateItem } from '../interface/rate';

export const expRateState = atom<RateItem[]>({
  key: 'expRateState',
  default: [],
});

export const rateValueSelector = selectorFamily({
  key: 'rateValueSelector',
  get:
    (rateName: string) =>
    ({ get }) => {
      const data = get(expRateState);
      const selectedRate = data.find((rate) => rate.rateName === rateName);
      return selectedRate ? selectedRate.value.toLocaleString() : '';
    },
});

export const totalExpSelector = selector({
  key: 'totalExpSelector',
  get: ({ get }) => {
    const rates = get(expRateState);
    return rates.reduce((total, rate) => total + rate.value, 100);
  },
});
