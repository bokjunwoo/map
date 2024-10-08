import { atom, selector, selectorFamily } from 'recoil';

export const itemDropState = atom<RateItem[]>({
  key: 'itemDropState',
  default: [],
});

export const rateValueSelector = selectorFamily({
  key: 'rateValueSelector',
  get:
    (rateName: string) =>
    ({ get }) => {
      const data = get(itemDropState);
      const selectedRate = data.find((rate) => rate.label === rateName);
      return selectedRate ? selectedRate.value.toLocaleString() : '';
    },
});

export const totalItemDropSelector = selector({
  key: 'totalItemDropSelector',
  get: ({ get }) => {
    const rates = get(itemDropState);
    return rates.reduce((total, rate) => total + rate.value, 0);
  },
});
