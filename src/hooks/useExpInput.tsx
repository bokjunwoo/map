import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useSetExpRate } from '../contexts/ExpRateStateProvider';
import { handleInputValueChange } from '../utils/hander';

interface UseExpInputResult {
  expName: string;
  handleExpChange: (event: SelectChangeEvent) => void;
}

interface UseExpInputProps {
  regex: RegExp;
  maxAllowedValue: number;
}

const useExpInput = ({
  regex,
  maxAllowedValue,
}: UseExpInputProps): UseExpInputResult => {
  const setExpRate = useSetExpRate();
  const [expNameValue, setExpNameValue] = useState('');

  const handleExpChange = (event: SelectChangeEvent) => {
    const inputValue = event.target.value;

    handleInputValueChange({
      inputValue: Number(inputValue),
      currentValue: Number(expNameValue),
      setValue: setExpNameValue,
      setExpRate,
      regex,
      maxAllowedValue,
    });
  };

  return { expName: expNameValue, handleExpChange };
};

export default useExpInput;
