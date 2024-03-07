import { useEffect } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { localStorageState } from '../state/atoms/localStorageState';

interface UseLocalStorageResult {
  storedValue: string;
  setStoredValue: SetterOrUpdater<string>;
}

export const useLocalStorage = (
  key: string,
  initialValue: string,
  options: string[]
): UseLocalStorageResult => {
  const [storedValue, setStoredValue] = useRecoilState(
    localStorageState({ key, defaultOptionValue: initialValue })
  );

  const valueToUse = storedValue ?? initialValue;

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && options.includes(e.newValue ?? '')) {
        setStoredValue(e.newValue ?? initialValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, initialValue, options, setStoredValue]);

  useEffect(() => {
    if (options.includes(valueToUse)) {
      localStorage.setItem(key, valueToUse);
    }
  }, [key, valueToUse, options]);

  return { storedValue: valueToUse, setStoredValue };
};
