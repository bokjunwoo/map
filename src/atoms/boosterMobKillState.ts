import { atomFamily } from 'recoil';
import { BOOSTER } from '../constants/constants';

export const boosterMobKillState = atomFamily({
  key: 'boosterMobKillState',
  default: BOOSTER.INITIAL_MOB_KILL,
});
