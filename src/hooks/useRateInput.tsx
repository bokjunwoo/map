import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { RecoilState, useSetRecoilState } from 'recoil';
import { handleRateInputChange } from '../utils/hander';

type UseRateInputProps = {
  regex: RegExp;
  maxAllowedValue: number;
  state: RecoilState<number>;
  initialValue?: string;
};

type UseRateInputResult = {
  value: string;
  handleRateChange: (event: SelectChangeEvent) => void;
};

const useRateInput = ({
  regex,
  maxAllowedValue,
  state,
  initialValue,
}: UseRateInputProps): UseRateInputResult => {
  const setRateState = useSetRecoilState(state);
  const [value, setValue] = useState<string>(initialValue || '');

  const handleRateChange = (event: SelectChangeEvent) => {
    const inputValue = event.target.value;

    handleRateInputChange({
      inputValue: Number(inputValue),
      currentValue: Number(value),
      setValue,
      setRate: setRateState,
      regex,
      maxAllowedValue,
    });
  };

  return { value, handleRateChange };
};

export default useRateInput;
