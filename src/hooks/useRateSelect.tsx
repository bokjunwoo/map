import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { RecoilState, useRecoilState, useRecoilValue } from 'recoil';
import { rateValueSelector } from '../atoms/expRateState';
import { RateItem } from '../interface/rate';
import { handleRateSelectChange } from '../utils/hander';

type UseRateSelectProps = {
  state: RecoilState<RateItem[]>;
  rateName: string;
};

type UseRateSelectResult = {
  value: string;
  handleRateChange: (event: SelectChangeEvent) => void;
};

const useRateSelect = ({
  state,
  rateName,
}: UseRateSelectProps): UseRateSelectResult => {
  const rateValue = useRecoilValue(rateValueSelector(rateName));

  const [rate, setRate] = useRecoilState(state);
  const [value, setValue] = useState<string>(rateValue);

  const handleRateChange = (event: SelectChangeEvent) => {
    const inputValue = event.target.value;

    handleRateSelectChange({
      rateItem: rate,
      rateName,
      inputValue,
      setValue,
      setRate,
    });
  };

  return { value, handleRateChange };
};

export default useRateSelect;
