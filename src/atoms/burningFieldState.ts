import { atom, selectorFamily } from 'recoil';

type BurningFieldItem = {
  map_name: string;
  burning_field: number;
};

export const burningFieldState = atom<BurningFieldItem[]>({
  key: 'burningFieldState',
  default: [],
});

export const getburningFieldValue = selectorFamily({
  key: 'filteredBurningFieldValue',
  get:
    (mapName: string) =>
    ({ get }) => {
      const data = get(burningFieldState);
      const item = data.find((item) => item.map_name === mapName);
      return item ? item.burning_field : 0;
    },
});
