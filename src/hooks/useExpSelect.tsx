import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useSetExpRate } from '../contexts/ExpRateStateProvider';
import { handleValueChange } from '../utils/hander';

interface UseExpSelectResult {
  expName: string;
  handleExpChange: (event: SelectChangeEvent) => void;
}

const useExpSelect = (): UseExpSelectResult => {
  const setExpRate = useSetExpRate();
  const [expNameValue, setExpNameValue] = useState('');

  const handleExpChange = (event: SelectChangeEvent) => {
    const inputValue = event.target.value;

    handleValueChange({
      inputValue: Number(inputValue),
      currentValue: Number(expNameValue),
      setValue: setExpNameValue,
      setExpRate,
    });
  };

  return { expName: expNameValue, handleExpChange };
};

export default useExpSelect;
