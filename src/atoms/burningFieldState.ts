import { atom } from 'recoil';

type BurningFieldItem = {
  map_name: string;
  burning_field: number;
};

export const burningFieldState = atom<BurningFieldItem[]>({
  key: 'burningFieldState',
  default: [],
});
