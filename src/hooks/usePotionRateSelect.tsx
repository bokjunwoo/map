import { SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  RecoilState,
  RecoilValueReadOnly,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { handlePotionRateSelectChange } from '../utils/hander';

type UseRateSelectProps = {
  rateValueSelector: (param: string) => RecoilValueReadOnly<string>;
  state: RecoilState<RateItem[]>;
  rateName: string;
  reverseState: RecoilState<RateItem[]>;
};

type UseRateSelectResult = {
  value: string;
  handleRateChange: (event: SelectChangeEvent) => void;
};

const usePotionRateSelect = ({
  rateValueSelector,
  state,
  rateName,
  reverseState,
}: UseRateSelectProps): UseRateSelectResult => {
  const rateValue = useRecoilValue(rateValueSelector(rateName));
  const reverseSetState = useSetRecoilState(reverseState);

  const [rate, setRate] = useRecoilState(state);

  const [value, setValue] = useState<string>(rateValue);

  const handleRateChange = (event: SelectChangeEvent) => {
    const inputValue = event.target.value;

    handlePotionRateSelectChange({
      rateItem: rate,
      rateName,
      inputValue,
      setValue,
      setRate,
      reverseSetState,
    });
  };

  useEffect(() => {
    setValue(rateValue);
  }, [rateValue]);

  return { value, handleRateChange };
};

export default usePotionRateSelect;
