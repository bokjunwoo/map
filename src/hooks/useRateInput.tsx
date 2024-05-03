import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { RecoilState, useRecoilState, useRecoilValue } from 'recoil';
import { rateValueSelector } from '../atoms/expRateState';
import { RateItem } from '../interface/rate';
import { handleRateInputChange } from '../utils/hander';

type UseRateInputProps = {
  state: RecoilState<RateItem[]>;
  rateName: string;
  regex: RegExp;
  maxAllowedValue: number;
};

type UseRateInputResult = {
  value: string;
  handleRateChange: (event: SelectChangeEvent) => void;
};

const useRateInput = ({
  state,
  rateName,
  regex,
  maxAllowedValue,
}: UseRateInputProps): UseRateInputResult => {
  const rateValue = useRecoilValue(rateValueSelector(rateName));

  const [rate, setRate] = useRecoilState(state);
  const [value, setValue] = useState<string>(rateValue);

  const handleRateChange = (event: SelectChangeEvent) => {
    const inputValue = event.target.value;

    handleRateInputChange({
      rateItem: rate,
      rateName,
      inputValue,
      setValue,
      setRate,
      regex,
      maxAllowedValue,
    });
  };

  return { value, handleRateChange };
};

export default useRateInput;
