import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME, REGEX } from '../../../constants/constants';
import useRateInput from '../../../hooks/useRateInput';
import RateInputUI from '../common/RateInputUI';

const ExpHolySymbol = () => {
  const { value, handleRateChange } = useRateInput({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.HOLY_SYMBOL,
    regex: REGEX.NUMBER,
    maxAllowedValue: 35,
  });

  const rateOption: RateInputOption = {
    label: '쓸만한 홀리 심볼(경험치)',
    key: RATE_NAME.HOLY_SYMBOL,
  };

  return (
    <RateInputUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ExpHolySymbol;
