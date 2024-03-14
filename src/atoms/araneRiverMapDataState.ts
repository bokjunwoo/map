import { atom, selectorFamily } from 'recoil';
import { araneRiverData } from '../data/map';

export const araneRiverMapState = atom({
  key: 'araneRiverMapState',
  default: araneRiverData,
});

export const selectAraneRiverMapState = selectorFamily({
  key: 'selectAraneRiverMapState',
  get:
    (regions: AraneRiverRegion[]) =>
    ({ get }) => {
      const data = get(araneRiverMapState);
      const selectedData = regions.flatMap((region) => data[region]);
      return selectedData;
    },
});
