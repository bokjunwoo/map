import { atomFamily } from 'recoil';

export const numberOfMonsterState = atomFamily({
  key: 'numberOfMonsterState',
  default: 0,
});
