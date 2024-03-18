import { atom } from 'recoil';
import { mapData } from '../data/map';
import { MapData } from '../interface/data';

export const mapDataState = atom<MapData>({
  key: 'mapDataState',
  default: mapData,
});
