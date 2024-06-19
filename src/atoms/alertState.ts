import { atom } from 'recoil';

export const alertState = atom({
  key: 'alertState',
  default: {
    isError: false,
    message: '',
  },
});
