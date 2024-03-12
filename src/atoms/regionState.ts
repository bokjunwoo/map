import { atom } from 'recoil';
import { ARCANERIVER_REGION } from '../constants/constants';
import { Region } from '../interface/data';

export const regionState = atom<Region>({
  key: 'regionState',
  default: ARCANERIVER_REGION,
});
