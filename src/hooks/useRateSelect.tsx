import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import {
  RecoilState,
  RecoilValueReadOnly,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { RateItem } from '../interface/rate';
import { handleRateSelectChange } from '../utils/hander';

type UseRateSelectProps = {
  rateValueSelector: (param: string) => RecoilValueReadOnly<string>;
  state: RecoilState<RateItem[]>;
  rateName: string;
};

type UseRateSelectResult = {
  value: string;
  handleRateChange: (event: SelectChangeEvent) => void;
};

const useRateSelect = ({
  rateValueSelector,
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
