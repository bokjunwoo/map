import { itemDropState } from '../../../atoms/itemDropState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import { RateInputOption } from '../../../interface/rate';
import RateInputUI from '../common/RateInputUI';

const ExpEtc = () => {
  const { value, handleRateChange } = useRateInput({
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 1000,
    state: itemDropState,
  });

  const rateOption: RateInputOption = {
    label: '기타(경험치)',
    key: 'exp_etc',
  };

  return (
    <RateInputUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ExpEtc;
