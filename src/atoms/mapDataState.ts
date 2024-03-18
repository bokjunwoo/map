import { atom, selectorFamily } from 'recoil';
import { mapData } from '../data/map';
import { MapData } from '../interface/data';

export const mapDataState = atom<MapData>({
  key: 'mapDataState',
  default: mapData,
});

export const getSelectedMapData = selectorFamily({
  key: 'filteredMapDataSelector',
  get:
    (regions: (AraneRiverRegion | GrandisRegion)[]) =>
    ({ get }) => {
      const data = get(mapDataState);
      const selectedData = regions.flatMap((region) => data[region]);
      return selectedData;
    },
});
