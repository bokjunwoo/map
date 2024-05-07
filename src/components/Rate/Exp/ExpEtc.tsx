import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import { RateInputOption } from '../../../interface/rate';
import RateInputUI from '../common/RateInputUI';

const ExpEtc = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: expRateState,
    rateName: 'exp_etc',
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 1000,
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
