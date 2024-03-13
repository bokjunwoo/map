import { atom } from 'recoil';

export const regionListState = atom<(GrandisRegion | AraneRiverRegion)[]>({
  key: 'regionListState',
  default: [],
});
