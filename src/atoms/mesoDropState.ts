import { atom, selector, selectorFamily } from 'recoil';
import { RateItem } from '../interface/rate';

export const mesoDropState = atom<RateItem[]>({
  key: 'mesoDropState',
  default: [],
});

export const rateValueSelector = selectorFamily({
  key: 'rateValueSelector',
  get:
    (rateName: string) =>
    ({ get }) => {
      const data = get(mesoDropState);
      const selectedRate = data.find((rate) => rate.rateName === rateName);
      return selectedRate ? selectedRate.value.toLocaleString() : '';
    },
});

export const totalMesoDropSelector = selector({
  key: 'totalMesoDropSelector',
  get: ({ get }) => {
    const rates = get(mesoDropState);
    return rates.reduce((total, rate) => total + rate.value, 0);
  },
});
