import { atom, selectorFamily } from 'recoil';
import { grandisData } from '../data/map';

export const grandisMapState = atom({
  key: 'grandisMapState',
  default: grandisData,
});

export const selectGrandisMapState = selectorFamily({
  key: 'selectGrandisMapState',
  get:
    (regions: GrandisRegion[]) =>
    ({ get }) => {
      const data = get(grandisMapState);
      const selectedData = regions.flatMap((region) => data[region]);
      return selectedData;
    },
});
