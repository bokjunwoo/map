import { atom, selector, selectorFamily } from 'recoil';

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
    const mesoDropRate = get(mesoDropState);
    const potionRate = mesoDropRate.find(
      (rate) => rate.rateName === 'wealth_acquisition_potion'
    );

    if (potionRate?.value !== 0 && potionRate) {
      const totalMesoDropRate = mesoDropRate.reduce(
        (total, rate) => total + rate.value,
        0
      );
      const applyMultiplicationPotion = Math.floor(
        (100 + totalMesoDropRate - 20) * 1.2 - 100 - totalMesoDropRate
      );

      return totalMesoDropRate + applyMultiplicationPotion;
    }

    return mesoDropRate.reduce((total, rate) => total + rate.value, 0);
  },
});
