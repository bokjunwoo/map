import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { RecoilState, useSetRecoilState } from 'recoil';
import { handleRateSelectChange } from '../utils/hander';

type UseRateSelectResult = {
  value: string;
  handleRateChange: (event: SelectChangeEvent) => void;
};

const useRateSelect = (
  state: RecoilState<number>,
  initialValue?: string
): UseRateSelectResult => {
  const setRateState = useSetRecoilState(state);
  const [value, setValue] = useState<string>(initialValue || '');

  const handleRateChange = (event: SelectChangeEvent) => {
    const inputValue = event.target.value;

    handleRateSelectChange({
      inputValue: Number(inputValue),
      currentValue: Number(value),
      setValue,
      setRate: setRateState,
    });
  };

  return { value, handleRateChange };
};

export default useRateSelect;
