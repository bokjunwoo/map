import { atomFamily } from 'recoil';

export const localStorageState = atomFamily({
  key: 'localStorage',
  default: ({
    key,
    defaultOptionValue,
  }: {
    key: string;
    defaultOptionValue: string;
  }) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ?? defaultOptionValue;
  },
});
