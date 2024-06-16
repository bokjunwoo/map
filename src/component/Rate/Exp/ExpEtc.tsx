import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME, REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const ExpEtc = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.ETC,
    regex: REGEX.NUMBER_AND_DOT,
    maxAllowedValue: 999,
  });

  const rateOption: RateInputOption = {
    label: '기타(경험치)',
    key: RATE_NAME.ETC,
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
