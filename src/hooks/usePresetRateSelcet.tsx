import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { handlePresetRateChange } from '../utils/hander';
import useRateLocalStorage from './useRateLocalStorage';

type UsePresetRateSelcetProps = {
  rateName: string;
  key: string;
};

const usePresetRateSelcet = ({ rateName, key }: UsePresetRateSelcetProps) => {
  const [storedValue, setStoredValue] = useRateLocalStorage<RateItem[]>(key, [
    { label: rateName, value: 0 },
  ]);

  const initialValue =
    storedValue?.find((item) => item.label === rateName)?.value || '';

  const [value, setValue] = useState<string>(initialValue.toLocaleString());

  const handleRateChange = (event: SelectChangeEvent) => {
    const inputValue = event.target.value;

    handlePresetRateChange({
      rateItem: storedValue,
      rateName,
      inputValue,
      setValue,
      setStoredValue,
    });
  };

  return { value, handleRateChange };
};

export default usePresetRateSelcet;
